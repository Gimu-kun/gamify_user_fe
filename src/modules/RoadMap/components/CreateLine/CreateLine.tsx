// CreateLine.tsx
import React from 'react';

// Định nghĩa kiểu cho strokeLinecap
type LineCap = 'butt' | 'round' | 'square' | 'inherit';

interface CreateLineProps {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  stroke?: string;
  strokeWidth?: number;
  dashArray?: string;
  lineCap?: LineCap; // ← Dùng kiểu cụ thể
  width?: number;
  height?: number;
}

const CreateLine: React.FC<CreateLineProps> = ({
  x1 = 50,
  y1 = 100,
  x2 = 450,
  y2 = 100,
  stroke = 'black',
  strokeWidth = 2,
  dashArray = '',
  lineCap = 'round', // giá trị mặc định hợp lệ
  width = 500,
  height = 200,
}) => {
  return (
    <svg width={width} height={height} className="absolute inset-0 pointer-events-none">
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeLinecap={lineCap} // ✅ Bây giờ hợp lệ
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
};

export default CreateLine;