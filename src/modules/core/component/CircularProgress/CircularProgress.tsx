// CircularProgress.tsx
import React from 'react';

interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const strokeDasharray = `${progress}, 100`;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        {/* Background circle */}
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="3"
          strokeDasharray="100, 100"
        />
        {/* Progress circle */}
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeDasharray={strokeDasharray}
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;