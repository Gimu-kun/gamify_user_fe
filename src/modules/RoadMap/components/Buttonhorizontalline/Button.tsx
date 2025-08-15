const Buttonhorizontalline = ({ number = 1 }) => {
  return (
    <div className="inline-block relative">
      <button className="mr-10 z-10 rounded-full w-15 h-15 border-6 border-second bg-third shadow-[0px_5px_2px_black]">
        <span className="text-amber-800 font-bold text-2xl">{number}</span>
      </button>
      <svg className="absolute top-7 left-9 -z-10" width={140} height={140} viewBox="0 0 25 25" fill="none">
        <path d="M50 0 0 0" strokeWidth={4} stroke="var(--color-primary)" />
        <path d="M50 1 0 1" strokeWidth={1} stroke="var(--color-third)" />
      </svg>
    </div>
  );
};

export default Buttonhorizontalline;