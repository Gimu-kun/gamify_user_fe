interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  size?: number; // Optional size prop
}

const Button = ({ 
  label = 'Click', 
  onClick, 
  className = '', 
  size = 150 // mặc định 40px
}: ButtonProps) => {
  return (
    <button
      className={`relative rounded-full border-none bg-transparent p-0 cursor-pointer outline-none select-none overflow-hidden group ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px` 
      }}
      onClick={() => {
        console.log('Button clicked!');
        if (onClick) onClick();
      }}
    >
      {/* Bóng đổ */}
      <span
        className="absolute inset-0 rounded-full bg-black/20 shadow-lg"
        style={{
          transform: 'translateY(5px)',
          transition: 'transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1)',
        }}
      ></span>

      {/* Viền gradient tím */}
      <span className="absolute inset-0.5 rounded-full bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800"></span>

      {/* Mặt trước */}
      <span
        className="relative flex items-center justify-center w-full h-full rounded-full text-white text-sm uppercase font-extrabold tracking-wider bg-gradient-to-br from-purple-500 to-purple-700 group-hover:from-purple-400 group-hover:to-purple-600"
        style={{
          transform: 'translateY(-6px)',
          transition: 'transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1)',
        }}
      >
        {/* Shimmer effect */}
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            transform: 'skewX(-30deg) translateX(-100%)',
            transition: 'transform 1s ease',
          }}
        ></span>
        <span className="relative z-10">{label}</span>
      </span>

      {/* CSS hiệu ứng tương tác */}
      <style jsx>{`
        button {
          transition: transform 150ms ease, filter 200ms ease;
          z-index: 10;
        }

        button:hover {
          transform: scale(1.05);
          filter: brightness(115%) contrast(1.1);
        }

        button:active {
          transform: scale(0.95) translateY(2px);
        }
      `}</style>
    </button>
  );
};

export default Button;