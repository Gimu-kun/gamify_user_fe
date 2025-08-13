// hooks/useCountdown.ts
import { useState, useEffect } from 'react';

const useCountdown = (initialSeconds: number): [number, () => void, boolean] => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setIsActive(false);
          clearInterval(timer);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive]);

  const reset = (newTime?: number) => {
    const time = newTime !== undefined ? newTime : initialSeconds;
    setTimeLeft(time);
    setIsActive(true);
  };

  return [timeLeft, reset, !isActive]; // timeLeft, hàm reset, isFinished
};

export default useCountdown;