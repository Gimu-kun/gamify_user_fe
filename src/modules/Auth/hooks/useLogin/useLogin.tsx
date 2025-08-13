// src/hooks/useLogin.ts
import { useState } from 'react';
import { loginUser as apiLoginUser } from '../../Services/Apiclient/AuthServices';
import type { LoginFormData, LoginResponse } from '../../Types/TypeUser';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      const result: LoginResponse = await apiLoginUser(data);

      if (result.token) {
        localStorage.setItem('authToken', result.token);
      }
      if (result.user) {
        localStorage.setItem('user', JSON.stringify(result.user));
      }

      window.dispatchEvent(new Event('storage'));
      
      
    } catch (error: unknown) {
      let message = 'Đăng nhập thất bại';

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        message = String((error as { message: unknown }).message);
      }

      setError(message);
     
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => {
    setError(null);
  };

  return {
    login,
    isLoading,
    error,
    resetError,
  } as const;
};