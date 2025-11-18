"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authApi } from "../lib/api/auth";
import { LoginRequest, SignUpRequest } from "../lib/api/types";
import { useAuthStore } from "../store/auth";

/**
 * React Query keys for auth
 */
export const authKeys = {
  all: ["auth"] as const,
  currentUser: () => [...authKeys.all, "currentUser"] as const,
};

/**
 * Hook for user login
 */
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (response) => {
      if (response.success && response.data) {
        setAuth(response.data.user, response.data.accessToken);
        queryClient.setQueryData(authKeys.currentUser(), response.data.user);
        toast.success(response.message || "Login successful");
        router.push("/dashboard");
      }
    },
    onError: (error: { message?: string }) => {
      toast.error(error.message || "Login failed. Please try again.");
    },
  });
};

/**
 * Hook for user sign up
 */
export const useSignUp = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationFn: (data: SignUpRequest) => authApi.signUp(data),
    onSuccess: (response) => {
      if (response.success && response.data) {
        setAuth(response.data.user, response.data.accessToken);
        queryClient.setQueryData(authKeys.currentUser(), response.data.user);
        toast.success(response.message || "Sign up successful");
        router.push("/dashboard");
      }
    },
    onError: (error: { message?: string }) => {
      toast.error(error.message || "Sign up failed. Please try again.");
    },
  });
};

/**
 * Hook for user logout
 */
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { clearAuth } = useAuthStore();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
      toast.success("Logged out successfully");
      router.push("/sign-in");
    },
    onError: () => {
      // Clear auth even if API call fails
      clearAuth();
      queryClient.clear();
      router.push("/sign-in");
    },
  });
};

/**
 * Hook to get current authenticated user
 */
export const useCurrentUser = () => {
  const { user, isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: authKeys.currentUser(),
    queryFn: async () => {
      const response = await authApi.getCurrentUser();
      return response.data.user;
    },
    enabled: isAuthenticated && !user, // Only fetch if authenticated but user not in store
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
};

/**
 * Hook to refresh access token
 */
export const useRefreshToken = () => {
  const { setAuth, user } = useAuthStore();

  return useMutation({
    mutationFn: () => authApi.refreshToken(),
    onSuccess: (response) => {
      if (response.success && response.data && user) {
        setAuth(user, response.data.accessToken);
      }
    },
  });
};

