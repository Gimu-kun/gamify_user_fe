import Button from '../components/Button/Button';
import { useState, useRef, useEffect } from 'react';

const RoadMapMobile = () => {
  const totalButtons = 12;
  const [positions] = useState<string[]>(() =>
    Array.from({ length: totalButtons }, (_, i) => (i % 2 === 0 ? 'left' : 'right'))
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  // Cập nhật tọa độ các đoạn nối
  useEffect(() => {
    if (!containerRef.current) return;

    const buttonPositions = buttonsRef.current
      .map((el) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      })
      .filter((pos): pos is { x: number; y: number } => pos !== null);

    const newLines = [];
    for (let i = 0; i < buttonPositions.length - 1; i++) {
      newLines.push({
        x1: buttonPositions[i].x,
        y1: buttonPositions[i].y,
        x2: buttonPositions[i + 1].x,
        y2: buttonPositions[i + 1].y,
      });
    }

    setLines(newLines);
  }, [positions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:py-20 md:py-24">
      {/* Container chính */}
      <div ref={containerRef} className="max-w-lg mx-auto relative">
        {/* Các nút xếp dọc */}
        <div className="flex flex-col items-center my-8 sm:my-10 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {Array.from({ length: totalButtons }, (_, i) => {
            const label = `Nút ${i + 1}`;
            const position = positions[i];

            return (
              <div
                key={i}
                className={`w-full flex ${
                  position === 'left' ? 'justify-start' : 'justify-end'
                } transition-all duration-300 px-3 sm:px-5`}
              >
                {/* Wrapper để căn nút và lưu ref */}
                <div
                  ref={(el) => (buttonsRef.current[i] = el)}
                  className="transform scale-75 sm:scale-90 md:scale-100 z-10 py-4 sm:py-6"
                >
                  <Button label={label} />
                </div>
              </div>
            );
          })}
        </div>

        {/* SVG vẽ đường nối zigzag */}
        <svg
          className="absolute inset-0 pointer-events-none w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="zigzag-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <g stroke="url(#zigzag-gradient)" strokeWidth="2.5" fill="none">
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                strokeDasharray="6,4"
                strokeLinecap="round"
                className="opacity-70"
                vectorEffect="non-scaling-stroke" // Giữ độ dày đường ổn định khi scale
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Animation nhẹ (tùy chọn) */}
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

        svg line {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </div>
  );
};

export default RoadMapMobile;