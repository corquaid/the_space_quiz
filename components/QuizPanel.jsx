import styles from "../styles/QuizPanel.module.css";
import AnswerButton from "./AnswerButton";
import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import LinearProgress from "@material-ui/core/LinearProgress";

const DynamicScoreModal = dynamic(() => import("../components/ScoreModal"), {
    loading: () => <p>Loading...</p>,
});

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.grey,
        color: "white",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "helveticabold, sans-serif",
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
        },
    },
}));

const StyledLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: "#7FD9B0",
    },
    barColorPrimary: {
        backgroundColor: "#1F2833",
    },
})(LinearProgress);

const QuizPanel = ({ quizData, imageUrl, tooltip }) => {
    // Call in context for quiz score & logic tracking
    const { currentQuestion, setCurrentQuestion, showScore, setShowScore, score, setScore } = useContext(QuizContext);

    // Finding the correct URL slug for modal Nav buttons
    const router = useRouter();
    const fullPath = router.pathname;

    // Formatting of category and quiz names for Link redirection and Breadcrumbs display
    const categoryRaw = fullPath.split("/")[1].charAt(0).toUpperCase() + fullPath.split("/")[1].substring(1);

    const categoryFormatted = categoryRaw
        .replace(/(^|\/|-)(\S)/g, s => s.toUpperCase())
        .replace(/-/g, " ")
        .replace(/x$/, "X")
        .replace(/ula/i, "ULA");

    const quizNameRaw = fullPath.split("/")[2].charAt(0).toUpperCase() + fullPath.split("/")[2].substring(1);

    const quizNameFormatted = quizNameRaw
        .replace(/(^|\/|-)(\S)/g, s => s.toUpperCase())
        .replace(/-/g, " ")
        .replace(/stations/i, "Space Stations")
        .replace(/newspace/i, "New Space")
        .replace(/rocketlab/i, "Rocket Lab");

    // Sequential logic for progression through quiz with setTimeout to delay transition to next question
    const handleAnswerOptionClick = isCorrect => {
        setTimeout(() => {
            if (isCorrect) {
                setScore(score + 1);
            }

            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizData.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }, 500);
    };

    // Handler function for popup dialog close
    const handleClose = () => {
        setShowScore(false);
    };

    const classes = useStyles();

    return (
        <div className={styles.container}>
            <DynamicScoreModal
                score={score}
                showScore={showScore}
                handleClose={handleClose}
                categoryRaw={categoryRaw}
                categoryFormatted={categoryFormatted}
                quizNameRaw={quizNameRaw}
            />
            <Breadcrumbs className={classes.root} aria-label="breadcrumb" separator="???">
                <Link href="/" color="inherit">
                    Home
                </Link>
                <Link href={`/${categoryRaw.toLowerCase()}/main`} color="inherit">
                    {categoryFormatted}
                </Link>
                <Typography className={classes.root} color="inherit">
                    {quizNameFormatted}
                </Typography>
            </Breadcrumbs>
            <div className={styles.quizBox}>
                <StyledLinearProgress variant="determinate" value={currentQuestion * 10} />
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
