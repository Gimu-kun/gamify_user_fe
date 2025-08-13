import Button from '../components/Button/Button';
import { useState, useRef, useEffect } from 'react';

/**
 * Component bản đồ lộ trình (RoadMap)
 * Hiển thị một dãy các nút (Button) xếp dọc theo trục chính,
 * xen kẽ sang trái và phải, nối với nhau bằng các đoạn thẳng dạng zigzag.
 */
const RoadMap = () => {
  // Tổng số nút trong bản đồ lộ trình
  const totalButtons = 12;

  // State lưu vị trí (left/right) của từng nút
  // Dùng hàm khởi tạo trong useState để tránh tính toán mỗi lần render
  const [positions] = useState<string[]>(() =>
    Array.from({ length: totalButtons }, (_, i) => (i % 2 === 0 ? 'left' : 'right'))
  );

  // Ref tham chiếu đến container chính (để tính tọa độ tương đối)
  const containerRef = useRef<HTMLDivElement>(null);

  // Mảng ref để lưu tham chiếu đến từng nút (div wrapper của Button)
  // Dùng để lấy vị trí chính xác của từng nút khi vẽ đường nối
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);

  // State lưu danh sách các đoạn thẳng (tọa độ x1, y1 -> x2, y2)
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  /**
   * useEffect: Tính toán lại các đoạn nối (lines) mỗi khi `positions` thay đổi
   * (tức là khi component render lần đầu hoặc dữ liệu thay đổi)
   */
  useEffect(() => {
    if (!containerRef.current) return;

    // Lấy danh sách tọa độ tâm của các nút (chỉ lấy những nút có ref hợp lệ)
    const buttonPositions = buttonsRef.current
      .map((el) => {
        if (!el) return null; // Bỏ qua nếu ref chưa được gán
        const rect = el.getBoundingClientRect(); // Vị trí tuyệt đối trên màn hình
        const containerRect = containerRef.current!.getBoundingClientRect(); // Vị trí container

        // Tính tọa độ tương đối so với container
        return {
          x: rect.left - containerRect.left + rect.width / 2, // tâm theo trục X
          y: rect.top - containerRect.top + rect.height / 2, // tâm theo trục Y
        };
      })
      .filter((pos): pos is { x: number; y: number } => pos !== null); // Lọc null và giúp TypeScript hiểu kiểu dữ liệu

    // Tạo các đoạn nối giữa các nút liên tiếp (từ nút i đến i+1)
    const newLines = [];
    for (let i = 0; i < buttonPositions.length - 1; i++) {
      newLines.push({
        x1: buttonPositions[i].x,
        y1: buttonPositions[i].y,
        x2: buttonPositions[i + 1].x,
        y2: buttonPositions[i + 1].y,
      });
    }

    // Cập nhật state để vẽ lại các đoạn nối trong SVG
    setLines(newLines);
  }, [positions]); // Chỉ chạy lại khi `positions` thay đổi

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-20 sm:py-12">
      {/* Container chính của roadmap, có tính tương đối để dùng absolute trong SVG */}
      <div ref={containerRef} className="max-w-lg mx-auto relative">
        {/* Dãy các nút xếp dọc */}
        <div className="flex flex-col items-center my-10 gap-10 sm:gap-12">
          {Array.from({ length: totalButtons }, (_, i) => {
            const label = `Nút ${i + 1}`;
            const position = positions[i]; // Xác định nút nằm bên trái hay phải

            return (
              <div
                key={i}
                className={`w-full flex ${
                  position === 'left' ? 'justify-start' : 'justify-end'
                } transition-all duration-300 `}
              >
                {/* Wrapper để lưu ref và áp dụng hiệu ứng */}
                <div
                  ref={(el) => (buttonsRef.current[i] = el)} // Gán ref cho từng nút
                  className="transform scale-90 sm:scale-100 z-10 " // Thu nhỏ trên mobile, full size trên màn lớn
                >
                  <Button label={label} /> {/* Component nút bấm */}
                </div>
              </div>
            );
          })}
        </div>

        {/* SVG vẽ các đoạn nối zigzag giữa các nút */}
        <svg
          className="absolute inset-0 pointer-events-none w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Định nghĩa gradient màu cho đường nối */}
          <defs>
            <linearGradient id="zigzag-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" /> {/* Tím đậm */}
              <stop offset="100%" stopColor="#6366F1" /> {/* Tím nhạt */}
            </linearGradient>
          </defs>

          {/* Nhóm các đường thẳng */}
          <g stroke="url(#zigzag-gradient)" strokeWidth="3" fill="none">
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                strokeDasharray="6,4" // Hiệu ứng đường đứt khúc (có thể bỏ nếu muốn liền mạch)
                strokeLinecap="round" // Đầu mút tròn
                className="opacity-70 " // Làm mờ một chút để nhẹ nhàng hơn
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Khai báo keyframes cho hiệu ứng CSS (chỉ dùng trong component này nhờ `jsx` style) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RoadMap;