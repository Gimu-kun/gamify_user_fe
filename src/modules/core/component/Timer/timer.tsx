const Timer = ({ timeLeft }: { timeLeft: number }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="absolute top-2 right-4 bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold">
      Thời gian: {formatTime(timeLeft)}
    </div>
  );
};
export default Timer;