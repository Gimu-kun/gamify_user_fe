// src/components/SignUp.tsx

import { useState } from 'react';
import { useRegister } from '../../Auth/hooks/useRegister/useRegister'; // ✅ Import hook
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
 
// Kiểu dữ liệu form
interface FormData {
  username: string;
  full_name: string;
  passwords: string;
  gender: 'male' | 'female';
  dob: string;
}

const SignUp = () => {
  const { register, loading, error } = useRegister();

  const [formData, setFormData] = useState<FormData>({
    username: '',
    full_name: '',
    passwords: '',
    gender: 'male',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value === 'nam' ? 'male' : 'female',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kiểm tra dữ liệu trước khi gửi
    if (!formData.username || !formData.full_name || !formData.passwords || !formData.dob) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Gọi hook để gửi dữ liệu
    await register(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>

      {/* Hiển thị lỗi toàn cục */}
      {error && (
        <p style={{ color: 'red', fontSize: '14px', textAlign: 'center', margin: '10px 0' }}>
          {error}
        </p>
      )}

      {/* Username */}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      {/* Full Name */}
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Full Name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="passwords"
          value={formData.passwords}
          onChange={handleChange}
          required
        />
      </div>

      {/* Birthday */}
      <div style={{ margin: '10px 0', textAlign: 'left' }}>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender */}
      <div className="flex" style={{ margin: '10px 0', justifyContent: 'flex-start' }}>
        <label>
          <input
            type="radio"
            name="gioi_tinh"
            value="nam"
            checked={formData.gender === 'male'}
            onChange={handleGenderChange}
            required
          />{' '}
          Nam
        </label>
        <label className="px-5">
          <input
            type="radio"
            name="gioi_tinh"
            value="nu"
            checked={formData.gender === 'female'}
            onChange={handleGenderChange}
          />{' '}
          Nữ
        </label>
      </div>

      {/* Submit Button */}
      <input
        type="submit"
        className="btn"
        value={loading ? 'Đang xử lý...' : 'Sign up'}
        disabled={loading}
      />

      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="#" className="social-icon">
          <FaTwitter />
        </a>
        <a href="#" className="social-icon">
          <FaGoogle />
        </a>
        <a href="#" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </form>
  );
};

export default SignUp;