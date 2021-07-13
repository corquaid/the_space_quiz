import styles from "../styles/QuizPanel.module.css";
import AnswerButton from "./AnswerButton";
import ScoreModal from "./ScoreModal";
import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import { useRouter } from "next/router";

const QuizPanel = ({ quizData }) => {
    const { currentQuestion, setCurrentQuestion, showScore, setShowScore, score, setScore } = useContext(QuizContext);

    // Finding the correct URL slug for modal Nav buttons
    const router = useRouter();
    const fullPath = router.pathname;
    
    const slug = fullPath.split('/')[1].charAt(0).toUpperCase() + fullPath.split("/")[1].substring(1);

  


    // Sequential logic for progression through quiz
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

    // Handler function for popup dialog close
    const handleClose = () => {
        setShowScore(false);
    };

    return (
        <div className={styles.container}>
            <ScoreModal score={score} showScore={showScore} handleClose={handleClose} slug={slug}/>
            <div className={styles.quizBox}>
                <div className={styles.imageBox}>
                    <img
                        className={styles.image}
                        src="https://cdn.theatlantic.com/media/img/photo/2019/07/apollo-11-moon-landing-photos-50-ye/a01_40-5903-1/original.jpg"
                    />
                </div>
                <div className={styles.quizGrid}>
                    <h3 className={styles.quizQuestion}>{quizData[currentQuestion].question}</h3>
                    <div className={styles.quizAnswers}>
                        {quizData[currentQuestion].answers.map(answer => (
                            <AnswerButton
                                key={answer.id}
                                text={answer.answerText}
                                onClick={() => handleAnswerOptionClick(answer.isCorrect)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPanel;
