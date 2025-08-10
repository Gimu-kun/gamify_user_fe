// src/auth/types.ts
//==Đăng kí==
export type Gender = 'male' | 'female';

export interface RegisterFormData {
  username: string;
  full_name: string;
  passwords: string; // ← đúng như API: "passwords"
  gender: Gender;
  dob: string; // YYYY-MM-DD
}

export interface RegisterResponse {
  message: string;
  user: RegisterFormData;
}

// === ĐĂNG NHẬP ===
export interface LoginFormData {
  username: string;
  passwords: string; // ← giống backend
}

// Giả sử backend trả về token hoặc thông tin user
export interface LoginResponse {
  message: string;
  token?: string;      // JWT token
  user?: {
    username: string;
    full_name: string;
    role?: string;
  };
}