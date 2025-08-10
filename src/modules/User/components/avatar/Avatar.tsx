// components/Avatar.tsx
import { useState } from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  username: string;
  onImageChange?: (file: File) => void;
}

const Avatar = ({ src, alt = "User avatar", username, onImageChange }: AvatarProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (onImageChange) onImageChange(file);
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
        <img
          src={imageSrc}
          alt={alt}
          className="absolute inset-1 rounded-full object-cover shadow-md transition-transform duration-300"
          style={{ zIndex: 1 }}
        />

      <h2 className="mt-4 text-lg font-semibold text-gray-800">{username}</h2>

      <div className="mt-3">
        <label className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition">
          Change Avatar
          <input type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
        </label>
      </div>
    </div>
  );
};

export default Avatar