import Button from '../../modules/RoadMap/components/Button/Button';
import { useState, useEffect } from 'react';

const App = () => {
  const totalButtons = 10;
  const [positions] = useState<string[]>(() =>
    Array.from({ length: totalButtons }, (_, i) => (i % 2 === 0 ? 'left' : 'right'))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-20sm:py-12">
      {/* Container chính, giới hạn chiều rộng và căn giữa */}
      <div className="max-w-lg mx-auto ">
        {/* Flex column với gap đều */}
        <div className="flex flex-col items-center gap-10 sm:gap-12">
          {Array.from({ length: totalButtons }, (_, i) => {
            const label = `Nút ${i + 1}`;
            const position = positions[i];

            return (
              <div
                key={i}
                className={`w-full flex transition-all duration-300 hover:scale-105 ${
                  position === 'left' ? 'justify-start' : 'justify-end'
                }`}
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${i * 0.28}s`,
                }}
              >
                {/* Nút – đảm bảo không quá lớn trên mobile */}
                <div className="transform scale-90 sm:scale-100">
                  <Button label={label} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation nhẹ */}
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

export default App;