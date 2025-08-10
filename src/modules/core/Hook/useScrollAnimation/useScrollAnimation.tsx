// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Đảm bảo phần tử luôn bắt đầu ở trạng thái ẩn
    element.classList.add('opacity-0', 'translate-y-10');
    element.classList.remove('opacity-100', 'translate-y-0');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Vào viewport: hiện ra
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-10');
        } else {
          // Ra khỏi viewport: ẩn lại (nếu muốn lặp)
          element.classList.remove('opacity-100', 'translate-y-0');
          element.classList.add('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return ref;
};