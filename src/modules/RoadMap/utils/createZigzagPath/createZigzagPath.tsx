// src/components/ZigzagButtonGrid/utils/createZigzagPath.js

export const createZigzagPath = (container, linesSelector = ".zigzag-button") => {
  const lines = container.querySelectorAll(linesSelector);
  if (lines.length < 2) return null;

  const containerRect = container.getBoundingClientRect();
  let d = "";
  let points = [];

  // Lấy tọa độ các điểm (giữa mỗi nút)
  lines.forEach((line) => {
    const rect = line.getBoundingClientRect();
    const x = rect.left - containerRect.left + rect.width / 2;
    const y = rect.top - containerRect.top + rect.height / 2;
    points.push({ x, y });
  });

  if (points.length === 0) return null;

  // Bắt đầu từ điểm đầu tiên
  d = `M ${points[0].x} ${points[0].y}`;

  // Vẽ các đoạn cong giữa các điểm
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];

    // Tính điểm điều khiển: ở giữa, nhưng dịch lên/xuống để cong
    // Đẩy điểm điều khiển sang ngang để tạo cong tự nhiên
    const ctrlX = (prev.x + curr.x) / 2;
    const ctrlY = prev.y + (curr.y - prev.y) * 0.2; // điều chỉnh độ cong

    d += ` Q ${ctrlX} ${ctrlY}, ${curr.x} ${curr.y}`;
  }

  return { d, points };
};