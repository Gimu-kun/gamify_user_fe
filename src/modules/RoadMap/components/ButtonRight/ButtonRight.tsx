const ButtonRight = ({ number = 2 }) => {
  return (
  <div className="inline-block relative">
            <button className="mr-10 z-10 rounded-full w-15 h-15 border-6 border-second bg-third shadow-[0px_5px_2px_black]">
                <span className="text-amber-800 font-bold text-2xl">{number}</span>
            </button>
            <svg className="absolute top-3 left-0 -z-10" width={150} height={150} viewBox="-5 -5 60 60" fill="none">
                <path d="M0 3 20 3C50 3 50 50 20 50L0 50" strokeWidth={5} stroke="var(--color-primary)"/>
                <path d="M0 3 20 3C50 3 50 50 20 50L0 50" strokeWidth={2} stroke="var(--color-third)"/>
            </svg>
        </div>
  );
};

export default ButtonRight;