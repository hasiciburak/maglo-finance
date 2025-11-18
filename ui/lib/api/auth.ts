import { apiClient } from "./client";
import {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types";

/**
 * Authentication API endpoints
 */
export const authApi = {
  /**
   * Login user
   */
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      "/users/login",
      data
    );
    return response.data;
  },

  /**
   * Sign up new user
   */
  signUp: async (data: SignUpRequest): Promise<ApiResponse<SignUpResponse>> => {
    const response = await apiClient.post<ApiResponse<SignUpResponse>>(
      "/users/register",
      data
    );
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<ApiResponse<null>> => {
    const response = await apiClient.post<ApiResponse<null>>("/users/logout");
    return response.data;
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.get<ApiResponse<LoginResponse>>(
      "/auth/me"
    );
    return response.data;
  },

  /**
   * Refresh access token
   */
  refreshToken: async (): Promise<ApiResponse<{ accessToken: string }>> => {
    const response = await apiClient.post<ApiResponse<{ accessToken: string }>>(
      "/users/refresh-token"
    );
    return response.data;
  },
};
