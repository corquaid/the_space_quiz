import { connectToDatabase } from "../../utils/mongodb";
import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";


const Easy = ({ quizData }) => {
    const { currentQuestion, setCurrentQuestion, showScore, setShowScore, score, setScore } = useContext(QuizContext);
        
    const handleAnswerOptionClick = isCorrect => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="app">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {quizData.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{quizData.length}
                        </div>
                        <div className="question-text">{quizData[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {quizData[currentQuestion].answers.map(answer => (
                            <button key={answer.id} onClick={() => handleAnswerOptionClick(answer.isCorrect)}>
                                {answer.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Easy;

export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("apollo_easy").find({}).toArray();

        return {
            props: {
                quizData: JSON.parse(JSON.stringify(data)),
            },
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                err: "Something went wrong",
            },
        };
    }
}
