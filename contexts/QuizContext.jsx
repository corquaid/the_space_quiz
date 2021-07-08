import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const contextProps = {
        currentQuestion,
        setCurrentQuestion,
        showScore,
        setShowScore,
        score,
        setScore
    };

    return <QuizContext.Provider value={contextProps}>{children}</QuizContext.Provider>;
};

export { QuizProvider, QuizContext };
