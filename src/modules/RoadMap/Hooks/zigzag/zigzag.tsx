import Button from "../../components/Button/Button";
import { useRef, useEffect } from "react";

const ZigzagButtonGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll(".zigzag-button");
    if (lines.length < 2) return;

    // Xóa đường cũ
    const existingPath = container.querySelector(".zigzag-path");
    if (existingPath) existingPath.remove();

    // Tạo SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("zigzag-path");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
     svg.style.overflow = "visible";
    svg.style.pointerEvents = "none"; // Không chặn sự kiện click
    svg.style.zIndex = "-1";

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = "";
    let first = true;

    lines.forEach((line, i) => {
      const rect = line.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Tính tọa độ tương đối trong container
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      if (first) {
        d += `M ${x} ${y}`;
        first = false;
      } else {
        d += ` L ${x} ${y}`;
      }
    });

    path.setAttribute("d", d);
    path.setAttribute("stroke", "#8B5CF6"); // tím (phù hợp với shadow-purple)
    path.setAttribute("stroke-width", "5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-dasharray", "6,4"); // gạch đứt nét (tùy chọn)
    svg.appendChild(path);
    container.appendChild(svg);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-start gap-40 p-5 max-w-lg mx-auto"
      style={{ minHeight: "800px" }} // Đảm bảo đủ chiều cao
    >
      {Array.from({ length: 12 }, (_, i) => {
        const num = i + 1;
        const isLeft = i % 2 === 0; // chẵn -> trái, lẻ -> phải

        return (
          <div
            key={num}
            className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}
          >
            <Button
              label={num}
              className={`zigzag-button shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300 mb-5`}
              onClick={() => console.log(`Nút ${num} được bấm!`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ZigzagButtonGrid;