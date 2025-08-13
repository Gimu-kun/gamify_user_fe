// src/modules/Auth/hooks/useRegister/useRegister.tsx

import { useState } from 'react';

// Import types và API
import type { RegisterFormData, RegisterResponse } from '../../Types/TypeUser';
import { registerUser } from '../../Services/Apiclient/AuthServices';

// Định nghĩa kiểu trả về
interface UseRegisterReturn {
  register: (userData: RegisterFormData) => Promise<void>;
  loading: boolean;
  error: string | null;
  data: RegisterResponse | null;
}

export const useRegister = (): UseRegisterReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RegisterResponse | null>(null);

  const register = async (userData: RegisterFormData): Promise<void> => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await registerUser(userData);
      setData(result);
    } catch (error: unknown) {
      // ✅ Sửa: dùng `unknown` thay `any`
      const err = error as Error;
      setError(err.message || 'Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, data };
};