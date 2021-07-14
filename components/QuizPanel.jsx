import styles from "../styles/QuizPanel.module.css";
import AnswerButton from "./AnswerButton";
import ScoreModal from "./ScoreModal";
import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import { useRouter } from "next/router";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import LinearProgress from "@material-ui/core/LinearProgress";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.grey,
        color: "white",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const StyledBreadcrumbs = withStyles({
    root: {
        fontFamily: "helvetica-bold, sans-serif",
        color: "black",
        // border: "1px solid black"
    },
})(Breadcrumbs);

const StyledTypography = withStyles({
    root: {
        fontFamily: "helvetica-bold, sans-serif",
        color: "black",
    },
})(Typography);

const StyledLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: "#7FD9B0"
      },
      barColorPrimary: {
        backgroundColor: "#1F2833"
      }
})(LinearProgress)

const QuizPanel = ({ quizData, imageUrl, tooltip }) => {
    // Call in context for quiz score & logic tracking
    const { currentQuestion, setCurrentQuestion, showScore, setShowScore, score, setScore } = useContext(QuizContext);

    // Finding the correct URL slug for modal Nav buttons
    const router = useRouter();
    const fullPath = router.pathname;

    const categoryRaw = fullPath.split("/")[1].charAt(0).toUpperCase() + fullPath.split("/")[1].substring(1);

    const categoryFormatted = categoryRaw.replace(/(^|\/|-)(\S)/g, s => s.toUpperCase()).replace(/-/g, " ");

    const quizNameRaw = fullPath.split("/")[2].charAt(0).toUpperCase() + fullPath.split("/")[2].substring(1);

    const quizNameFormatted = quizNameRaw.replace(/(^|\/|-)(\S)/g, s => s.toUpperCase()).replace(/-/g, " ");

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
            <ScoreModal score={score} showScore={showScore} handleClose={handleClose} categoryRaw={categoryRaw} categoryFormatted={categoryFormatted} quizNameRaw={quizNameRaw} />
            <StyledBreadcrumbs aria-label="breadcrumb" separator="›">
                <Link href="/" color="inherit">
                    Home
                </Link>
                <Link href={`/${categoryRaw.toLowerCase()}/main`} color="inherit">
                    {categoryFormatted}
                </Link>
                <StyledTypography color="inherit">{quizNameFormatted}</StyledTypography>
            </StyledBreadcrumbs>
            <div className={styles.quizBox}>
            <StyledLinearProgress variant="determinate" value={currentQuestion * 10}/>
                <div className={styles.imageBox}>
                    <LightTooltip title={tooltip} placement="top-end">
                        <img className={styles.image} src={imageUrl} />
                    </LightTooltip>
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
