import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../lib/api/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, accessToken: string) => void;
  clearAuth: () => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,

      setAuth: (user: User, accessToken: string) => {
        // Store token in localStorage for axios interceptor
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", accessToken);
        }
        set({
          user,
          accessToken,
          isAuthenticated: true,
        });
      },

      clearAuth: () => {
        // Remove token from localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
        }
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        });
      },

      updateUser: (updatedUser: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        }));
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

