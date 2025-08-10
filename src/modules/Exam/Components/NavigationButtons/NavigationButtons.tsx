const NavigationButtons = ({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
  isLastQuestion,
}: {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  isLastQuestion: boolean;
}) => (
  <div className="flex justify-between mt-8">
    <button
      onClick={onPrev}
      disabled={isPrevDisabled}
      className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Quay lại
    </button>
    <button
      onClick={onNext}
      disabled={isNextDisabled}
      className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isLastQuestion ? "Nộp bài" : "Tiếp theo"}
    </button>
  </div>
);

export default NavigationButtons;