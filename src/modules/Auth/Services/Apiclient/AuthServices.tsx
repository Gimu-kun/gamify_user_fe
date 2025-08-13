// src/modules/Auth/Api/Apiclient/Apiclient.tsx

import type {
  RegisterFormData,
  RegisterResponse,
  LoginFormData,
  LoginResponse,
} from '../../Types/TypeUser'; // ✅ import type + file tồn tại
import { API_CONFIG } from '../../../../config/ApiConfig'; // ✅ 3 cấp lên


// Gửi yêu cầu đăng ký người dùng

export const registerUser = async (
  userData: RegisterFormData
): Promise<RegisterResponse> => {
  const url = `${API_CONFIG.BASE_URL}/user`;
  let response: Response;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000); // 10s timeout

    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
  } catch (error: unknown) {
    
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Yêu cầu bị hủy: Mất kết nối hoặc server quá chậm');
    }
    if (!navigator.onLine) {
      throw new Error('Không có kết nối mạng');
    }
    throw new Error('Không thể kết nối đến máy chủ');
  }

  if (!response.ok) {
    let errorMsg = `Lỗi ${response.status}`;
    try {
      const errorText = await response.text();
      errorMsg = errorText || errorMsg;
    } catch {
      errorMsg = 'Không thể đọc lỗi từ server';
    }
    throw new Error(errorMsg);
  }

  let parsedData: RegisterResponse;
  try {
    parsedData = await response.json();
  } catch {
    throw new Error('Dữ liệu phản hồi không hợp lệ (không phải JSON)');
  }

  return parsedData; // ✅ Trả về biến đã khai báo
};


// kiểm tra đăng nhập
// src/Auth/Api/Apiclient/Apiclient.tsx

export const loginUser = async (
  loginData: LoginFormData
): Promise<LoginResponse> => {
  const url = `${API_CONFIG.BASE_URL}/user/login`;
  let response: Response;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000); // 10s timeout

    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginData.username,
        passwords: loginData.passwords,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Yêu cầu bị hủy: Mất kết nối hoặc server quá chậm');
    }
    if (!navigator.onLine) {
      throw new Error('Không có kết nối mạng');
    }
    throw new Error('Không thể kết nối đến máy chủ');
  }

  if (!response.ok) {
    let errorMsg = `Đăng nhập thất bại (${response.status})`;
    try {
      const errorText = await response.text();
      errorMsg = errorText || errorMsg;
    } catch {
      errorMsg = 'Không thể đọc lỗi từ server';
    }
    throw new Error(errorMsg);
  }

  let parsedData: any;
  try {
    parsedData = await response.json();
  } catch {
    throw new Error('Dữ liệu phản hồi không hợp lệ (không phải JSON)');
  }

  // ✅ LẤY TOKEN TỪ parsedData.data
  const token = parsedData.data; // ← chính là chuỗi JWT

  if (!token) {
    throw new Error('Server không trả về token');
  }

  // ✅ Trả về đúng định dạng mà useLogin.ts mong đợi
  const result: LoginResponse = {
    token, // ← gán token
    user: null, // ← nếu backend chưa trả user, để null tạm
  };

  return result;
};