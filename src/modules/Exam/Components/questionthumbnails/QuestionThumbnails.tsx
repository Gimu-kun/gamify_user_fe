const QuestionThumbnails = ({
  questions,
  currentQuestionIndex,
  answers,
  onNavigate,
}: {
  questions: Question[];
  currentQuestionIndex: number;
  answers: (string | null)[];
  onNavigate: (index: number) => void;
}) => (
  <div className="mt-10 pt-6 border-t border-gray-200">
    <h3 className="font-bold text-purple-600 mb-3">Danh sách câu hỏi</h3>
    <div className="flex flex-wrap gap-2">
      {questions.map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`w-10 h-10 flex items-center justify-center rounded font-medium text-sm transition-all ${
            index === currentQuestionIndex
              ? "bg-purple-600 text-white"
              : answers[index]
              ? "bg-green-200 text-green-800 border border-green-400"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionThumbnails;
