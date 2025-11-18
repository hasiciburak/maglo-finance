# API Fetcher Setup

This directory contains the API client setup using Axios, React Query, and Zustand.

## Structure

- `client.ts` - Axios instance with interceptors for authentication and error handling
- `types.ts` - TypeScript types for API requests and responses
- `auth.ts` - Authentication API endpoints

## Usage

### Using React Query Hooks

```tsx
import { useLogin, useSignUp, useLogout, useCurrentUser } from "@/ui/hooks";

function MyComponent() {
  const { mutate: login, isPending } = useLogin();
  const { user, isAuthenticated } = useAuthStore();

  const handleLogin = () => {
    login({ email: "user@example.com", password: "password123" });
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

### Using Zustand Store Directly

```tsx
import { useAuthStore } from "@/ui/store";

function MyComponent() {
  const { user, accessToken, isAuthenticated, setAuth, clearAuth } = useAuthStore();

  // Access user data
  console.log(user?.fullName);
  
  // Check authentication status
  if (isAuthenticated) {
    // User is logged in
  }
}
```

### Using API Client Directly

```tsx
import { authApi } from "@/ui/lib/api";

// Direct API call (not recommended, use hooks instead)
const response = await authApi.login({ email: "...", password: "..." });
```

## Environment Variables

Set the following environment variable in your `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Features

- ✅ Automatic token injection in request headers
- ✅ Token persistence in localStorage
- ✅ Automatic logout on 401 errors
- ✅ Type-safe API calls
- ✅ React Query integration for caching and state management
- ✅ Zustand store for global auth state
- ✅ Toast notifications for success/error messages

