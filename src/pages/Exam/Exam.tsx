import ResultScreen from "../../modules/Exam/Components/ResultScreen/ResultScreen";
import Timer from "../../modules/core/component/Timer/timer";
import ProgressBar from "../../modules/Exam/Components/ProGressBar/ProGressBar";
import QuestionForm from "../../modules/Exam/Components/QuestionForm/QuestionForm";
import NavigationButtons from "../../modules/Exam/Components/NavigationButtons/NavigationButtons";
import QuestionThumbnails from "../../modules/Exam/Components/questionthumbnails/QuestionThumbnails";
import { useEffect, useState } from "react";
import type { QuestionType } from "../../types/question";
import ContainerForm from "../../modules/core/component/ContainerForm/ContainerForn";
// Các component đã được định nghĩa ở trên (Timer, ProgressBar, v.v.)

const Exam: React.FC = () => {
  const questions: QuestionType[] = [
    {
      question: "Đâu là thủ đô của Việt Nam?",
      options: { a: "Hà Nội", b: "TP. Hồ Chí Minh", c: "Đà Nẵng", d: "Huế" },
      correctAnswer: "a",
    },
    {
      question: "Ai là người đầu tiên đặt chân lên Mặt trăng?",
      options: { a: "Yuri Gagarin", b: "Neil Armstrong", c: "Buzz Aldrin", d: "Michael Collins" },
      correctAnswer: "b",
    },
    {
      question: "Loài động vật nào lớn nhất trên Trái đất?",
      options: { a: "Voi châu Phi", b: "Cá voi xanh", c: "Khủng long bạo chúa", d: "Hươu cao cổ" },
      correctAnswer: "b",
    },
    {
      question: "Ngôn ngữ nào được sử dụng nhiều nhất trên thế giới?",
      options: { a: "Tiếng Anh", b: "Tiếng Trung Quốc", c: "Tiếng Tây Ban Nha", d: "Tiếng Hindi" },
      correctAnswer: "b",
    },
    {
      question: "Núi Everest thuộc dãy núi nào?",
      options: { a: "Dãy Alps", b: "Dãy Andes", c: "Dãy Himalaya", d: "Dãy Rocky" },
      correctAnswer: "c",
    },
    {
      question: "Ai là tác giả của tiểu thuyết 'Chiến tranh và Hòa bình'?",
      options: { a: "Fyodor Dostoevsky", b: "Leo Tolstoy", c: "Anton Chekhov", d: "Nikolai Gogol" },
      correctAnswer: "b",
    },
    {
      question: "Nước nào có diện tích lớn nhất thế giới?",
      options: { a: "Canada", b: "Trung Quốc", c: "Hoa Kỳ", d: "Nga" },
      correctAnswer: "d",
    },
    {
      question: "Thành phố nào được mệnh danh là 'Kinh đô ánh sáng'?",
      options: { a: "New York", b: "Paris", c: "London", d: "Tokyo" },
      correctAnswer: "b",
    },
    {
      question: "Đơn vị tiền tệ của Nhật Bản là gì?",
      options: { a: "Won", b: "Yên", c: "Yuan", d: "Dollar" },
      correctAnswer: "b",
    },
    {
      question: "Quốc gia nào có hình dạng giống một chiếc ủng?",
      options: { a: "Hy Lạp", b: "Ý", c: "Pháp", d: "Tây Ban Nha" },
      correctAnswer: "b",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(900); // 15 phút
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    if (quizEnded) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quizEnded]);

  const selectOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const goToNext = () => {
    if (answers[currentQuestionIndex] === null) return;
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      endQuiz();
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const endQuiz = () => {
    setQuizEnded(true);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (quizEnded) {
    return <ResultScreen questions={questions} answers={answers} />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
   <ContainerForm>
        <div className="p-6 relative">
          <Timer timeLeft={timeLeft} />
          <h1 className="text-2xl font-bold text-purple-600 mb-2 text-center">Bài Trắc Nghiệm</h1>
          <ProgressBar progress={progress} />
        </div>

        <QuestionForm
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          selectedAnswer={answers[currentQuestionIndex]}
          onSelect={selectOption}
        />

        <NavigationButtons
          onPrev={goToPrev}
          onNext={goToNext}
          isPrevDisabled={currentQuestionIndex === 0}
          isNextDisabled={answers[currentQuestionIndex] === null}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
        />

        <QuestionThumbnails
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onNavigate={navigateToQuestion}
        />
      
    </ContainerForm>
  );
};

export default Exam;