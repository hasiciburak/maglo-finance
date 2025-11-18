/** API Response Types */

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
  error: string;
  code: string;
};

/** User Types */

export type User = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAt: string | null;
  lastLoginIP: string | null;
  createdAt: string;
  updatedAt: string;
};

/** Auth Types */

export type LoginResponse = {
  user: User;
  accessToken: string;
};

export type SignUpResponse = {
  user: User;
  accessToken: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};
