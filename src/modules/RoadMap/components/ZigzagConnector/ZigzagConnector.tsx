import { useEffect } from "react";
import { createZigzagPath } from "../../utils/createZigzagPath/createZigzagPath";

const ZigzagConnector = ({ containerRef }) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Xóa đường nối cũ
    const existingPath = container.querySelector(".zigzag-path");
    if (existingPath) existingPath.remove();

    const result = createZigzagPath(container);
    if (!result) return;

    const { d } = result;

    // Tạo SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("zigzag-path");
    Object.assign(svg.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      pointerEvents: "none",
      zIndex: "-1",
    });

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", "#8B5CF6"); // tím (phù hợp với shadow-purple)
    path.setAttribute("stroke-width", "5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-dasharray", "6,4"); // gạch đứt nét

    svg.appendChild(path);
    container.appendChild(svg);

    // Dọn dẹp khi unmount
    return () => {
      if (svg.parentElement === container) {
        container.removeChild(svg);
      }
    };
  }, [containerRef]);

  return null;
};

export default ZigzagConnector;