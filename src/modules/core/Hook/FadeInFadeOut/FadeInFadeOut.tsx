import React, { useState, useEffect } from 'react';

// Custom Hook: Quản lý hiệu ứng xuất hiện và biến mất của các phần tử
const useElementFadeInAndOut = (
  count: number,
  fadeInDelay: number = 200,
  fadeOutStartDelay: number = 1500,
  fadeOutDelay: number = 300
) => {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(Array(count).fill(false));
  const [fadingOutElements, setFadingOutElements] = useState<boolean[]>(Array(count).fill(false));
  const [phase, setPhase] = useState<'idle' | 'fade-in' | 'wait' | 'fade-out' | 'reset'>('idle');

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    // Bắt đầu hiệu ứng
    setPhase('fade-in');

    // Fade In: từng phần tử hiện lên
    for (let i = 0; i < count; i++) {
      const fadeInTimer = setTimeout(() => {
        setVisibleElements((prev) => {
          const newArr = [...prev];
          newArr[i] = true;
          return newArr;
        });
      }, fadeInDelay * i);

      timers.push(fadeInTimer);
    }

    // Chuyển sang giai đoạn chờ trước khi fade out
    const waitTimer = setTimeout(() => {
      setPhase('fade-out');
    }, fadeOutStartDelay + fadeInDelay * count);

    timers.push(waitTimer);

    // Fade Out: từng phần tử biến mất
    for (let i = 0; i < count; i++) {
      const fadeOutTimer = setTimeout(() => {
        setFadingOutElements((prev) => {
          const newArr = [...prev];
          newArr[i] = true;
          return newArr;
        });
      }, fadeOutStartDelay + fadeInDelay * count + fadeOutDelay * i);

      timers.push(fadeOutTimer);
    }

    // Reset sau khi hoàn tất (nếu muốn lặp lại)
    const resetTimer = setTimeout(() => {
      setVisibleElements(Array(count).fill(false));
      setFadingOutElements(Array(count).fill(false));
      setPhase('idle');
      // Tự động bắt đầu lại
      setTimeout(() => setPhase('fade-in'), 500);
    }, fadeOutStartDelay + fadeInDelay * count + fadeOutDelay * count + 500);

    timers.push(resetTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [count, fadeInDelay, fadeOutStartDelay, fadeOutDelay]);

  return { visibleElements, fadingOutElements };
};

// Component sử dụng hook
const ElementFadeInFadeOut: React.FC = () => {
  const { visibleElements, fadingOutElements } = useElementFadeInAndOut(5, 300, 1000, 400);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        gap: '15px',
      }}
    >
      {visibleElements.map((isVisible, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
           
            opacity: fadingOutElements[index] ? 0 : isVisible ? 1 : 0,
            transform: `scale(${fadingOutElements[index] ? 0 : isVisible ? 1 : 0})`,
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        />
      ))}
    </div>
  );
};

export default ElementFadeInFadeOut;