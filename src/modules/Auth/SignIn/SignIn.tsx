
// src/modules/Auth/SignIn/SignIn.tsx
import { useState } from 'react';
import { useLogin } from '../../Auth/hooks/useLogin/useLogin'; // ✅ dùng hook đã tạo
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const { login, isLoading, error } = useLogin();
  const [formData, setFormData] = useState({
    username: '',
    passwords: '', // ← giữ nguyên tên trường theo backend
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
    await login(formData);
    navigate('/exam', { replace: true }); // về trang chủ, không quay lại được trang login
   
   
   
};
  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>

      {/* Hiển thị lỗi */}
      {error && (
        <div
          style={{
            color: '#e74c3c',
            fontSize: '0.875rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      )}

      {/* Username */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      {/* Password */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="passwords"
          placeholder="Password"
          value={formData.passwords}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      {/* Submit Button */}
      <input
        type="submit"
        value={isLoading ? 'Đang đăng nhập...' : 'Login'}
        className="btn solid"
        disabled={isLoading}
      />

      {/* Social */}
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon" aria-label="Google">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};

export default SignIn;