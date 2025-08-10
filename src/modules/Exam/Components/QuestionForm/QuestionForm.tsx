const QuestionForm = ({
  question,
  options, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  correctAnswer,
  selectedAnswer,
  onSelect,
}: {
  question: string;
  options: { a: string; b: string; c: string; d: string };
  correctAnswer: "a" | "b" | "c" | "d";
  selectedAnswer: string | null;
  onSelect: (option: string) => void;
}) => (
  <div className="p-6 border-t border-gray-100">
    <h2 className="text-lg mb-6">{question}</h2>

    <div className="space-y-3 mb-6">
      {Object.entries(options).map(([key, value]) => (
        <div
          key={key}
          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
            selectedAnswer === key
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-gray-100 border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => onSelect(key)}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold text-sm ${
              selectedAnswer === key
                ? "bg-white text-purple-600"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {key.toUpperCase()}
          </div>
          <span>{value}</span>
        </div>
      ))}
    </div>
  </div>
);
export default QuestionForm;