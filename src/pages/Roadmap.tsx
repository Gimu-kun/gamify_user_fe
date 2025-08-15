
import Buttonhorizontalline from '../modules/RoadMap/components/Buttonhorizontalline/Button'
import ButtonLeft from '../modules/RoadMap/components/ButtonLeft/ButtonLeft'
import ButtonRight from '../modules/RoadMap/components/ButtonRight/ButtonRight'

const ButtonLayout = (n) => {
  
// chú thích khi 1 hàng 2 nút , 1 hàng 1 nút cộng khi nào đủ 25 hàng (show theo hàng) 
//ghi chú chứ có nút end
  return (
    <div className="relative m-auto w-full">
  {Array.from({ length: n=25 }, (_, index) => {
    const top = index * 115; // 0, 29, 58, 87, 116, 145, 174, 203, 232, 261, 290
    const left = index % 2 === 1 ? '3.5rem' : 'auto'; // left-14 chỉ ở hàng chẵn (index lẻ)

    // Tính số nút theo quy luật:
    // Hàng lẻ (index chẵn): 1,4,7,10,13,16 → horiz
    //                      và 2,5,8,11,14 → right (trừ hàng 11)
    // Hàng chẵn (index lẻ): 3,6,9,12,15 → left
    const isEvenRow = index % 2 === 1; // index lẻ → hàng chẵn (hàng 2,4,6,...)
    const number = isEvenRow
      ? 3 * (Math.floor((index + 1) / 2)) // 3,6,9,12,15
      : 3 * Math.floor(index / 2) + 1;   // 1,4,7,10,13,16

    return (
      <div
        key={index}
        style={{ top: `${top}px`, left }}
        className="absolute whitespace-nowrap"
      >
        {isEvenRow ? (
          // Hàng chẵn: ButtonLeft
          <ButtonLeft number={number} />
        ) : (
          // Hàng lẻ: Buttonhorizontalline + (ButtonRight nếu không phải hàng cuối)
          <>
            <Buttonhorizontalline number={number} />
            {index <= n+1 && <ButtonRight number={number + 1} />} 
          </>
        )}
      </div>
    );
  })}
</div>
  );
};

export default ButtonLayout;