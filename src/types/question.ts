export type QuestionType ={
    question: string;
    options: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    correctAnswer: "a" | "b" | "c" | "d";
}