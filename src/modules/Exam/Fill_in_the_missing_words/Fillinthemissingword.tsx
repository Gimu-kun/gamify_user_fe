import { useState } from "react";

interface AnswerFeedback {
  question: number;
  correct: boolean;
  message: string;
  userAnswer: string;
  correctAnswer: string;
}

const FillInTheMissingWord = () => {
  const [result, setResult] = useState<{
    score: number;
    total: number;
    feedback: AnswerFeedback[];
    show: boolean;
  }>({
    score: 0,
    total: 7,
    feedback: [],
    show: false,
  });

  const correctAnswers = {
    q1: "đông",
    q2: "tây",
    q3: "Hà Nội",
    q4: "Paris",
    q5: "Trái đất",
    q6: "sắt",
    q7: "oxi",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let score = 0;
    const feedback: AnswerFeedback[] = [];

    (Object.keys(correctAnswers) as Array<keyof typeof correctAnswers>).forEach(
      (key) => {
        const userAnswer = (formData.get(key) as string)
          .trim()
          .toLowerCase();
        const correctAnswer = correctAnswers[key].toLowerCase();

        const questionNumber = parseInt(key.slice(1), 10);

        if (userAnswer === correctAnswer) {
          score++;
        }

        feedback.push({
          question: questionNumber,
          correct: userAnswer === correctAnswer,
          message:
            userAnswer === correctAnswer
              ? "Chính xác"
              : `Sai - Đáp án đúng: ${correctAnswers[key]}`,
          userAnswer,
          correctAnswer: correctAnswers[key],
        });
      }
    );

    setResult({
      score,
      total: Object.keys(correctAnswers).length,
      feedback,
      show: true,
    });

    // Cuộn xuống phần kết quả
    setTimeout(() => {
      const resultElement = document.getElementById("resultContainer");
      resultElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-purple-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-700 mb-2">
            Bài Tập Điền Khuyết
          </h1>
          <p className="text-gray-600">
            Điền từ thích hợp vào chỗ trống trong các câu sau
          </p>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <form id="gapFillForm" onSubmit={handleSubmit} className="space-y-8">
            <div className="question">
              <p className="text-lg mb-4">
                1. Mặt trời mọc ở hướng{" "}
                <input
                  type="text"
                  name="q1"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />{" "}
                và lặn ở hướng{" "}
                <input
                  type="text"
                  name="q2"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />
                .
              </p>
            </div>

            <div className="question">
              <p className="text-lg mb-4">
                2. Thủ đô của Việt Nam là{" "}
                <input
                  type="text"
                  name="q3"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />
                , còn thủ đô của Pháp là{" "}
                <input
                  type="text"
                  name="q4"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />
                .
              </p>
            </div>

            <div className="question">
              <p className="text-lg mb-4">
                3.{" "}
                <input
                  type="text"
                  name="q5"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />{" "}
                là hành tinh thứ 3 tính từ mặt trời và là nơi duy nhất có sự sống
                trong hệ mặt trời.
              </p>
            </div>

            <div className="question">
              <p className="text-lg mb-4">
                4. Nguyên tố hóa học có ký hiệu Fe là{" "}
                <input
                  type="text"
                  name="q6"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />
                , còn O là{" "}
                <input
                  type="text"
                  name="q7"
                  className="gap-field inline-block min-w-[100px] text-center align-bottom border-b-2 border-dashed border-purple-500 outline-none px-1 py-0.5"
                />
                .
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Kiểm Tra Kết Quả
              </button>
            </div>
          </form>
        </div>

        {/* Kết quả */}
        <div
          id="resultContainer"
          className={`${
            result.show ? "block" : "hidden"
          } bg-white p-6 rounded-xl shadow-md mb-8 transition-all duration-300`}
        >
          <div className="score-display text-center mb-6">
            <p className="text-2xl font-bold">
              Kết quả:{" "}
              <span className="text-purple-600">{result.score}</span>/
              <span className="text-gray-600">{result.total}</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                id="progressBar"
                className="bg-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(result.score / result.total) * 100}%` }}
              ></div>
            </div>
          </div>

          <div id="answerFeedback" className="space-y-4">
            {result.feedback.map((item) => (
              <div key={`feedback-${item.question}`} className="flex items-start">
                <div className="mr-2 font-medium">Câu {item.question}:</div>
                <div>{item.message}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Hãy kiểm tra kỹ các câu trả lời trước khi nộp bài.</p>
        </div>
      </div>
    </div>
  );
};

export default FillInTheMissingWord;