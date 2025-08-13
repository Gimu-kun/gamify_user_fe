import type { QuestionType } from "../../../../types/question";

// Component chính
const ResultScreen = ({
  questions,
  answers,
}: {
  questions: QuestionType[];
  answers: (string | null)[];
}) => {
  const score = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0),
    0
  );
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-purple-50 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border-4 border-purple-600 p-8">
        <h1 className="text-2xl font-bold text-purple-600 mb-6 text-center">Kết quả</h1>
        <p className="text-xl text-center mb-8">
          <span className="font-bold">
            {score}/{questions.length}
          </span>{" "}
          câu đúng ({percentage}%)
        </p>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            const correctText = q.options[q.correctAnswer];
            const userText = userAnswer
              ? q.options[userAnswer as keyof typeof q.options]
              : "Không trả lời";

            return (
              <div
                key={index}
                className={`p-4 border-l-4 rounded-r-lg ${
                  isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
                }`}
              >
                <p className="font-medium">Câu {index + 1}: {q.question}</p>
                <p className="text-sm">
                  Bạn chọn:{" "}
                  <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                    {userText}
                  </span>{" "}
                  {isCorrect ? "✓" : "✗"}
                </p>
                {!isCorrect && (
                  <p className="text-sm text-gray-600">Đáp án đúng: {correctText}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;