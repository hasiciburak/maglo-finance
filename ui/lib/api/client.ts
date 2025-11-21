import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiError } from "./types";

const getAccessToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
};

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAccessToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<ApiError>) => {
      if (error.response?.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          // ? TODO: Optionally redirect to login page
          // ? window.location.href = "/sign-in";
        }
      }

      const apiError: ApiError = {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred",
        error:
          error.response?.data?.error ||
          error.message ||
          "An unexpected error occurred",
        code: error.response?.data?.code || "UNKNOWN_ERROR",
      };

      return Promise.reject(apiError);
    }
  );

  return instance;
};

export const apiClient = createAxiosInstance();
