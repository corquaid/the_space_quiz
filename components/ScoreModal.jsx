import styles from "../styles/ScoreModal.module.css";
import Dialog from "@material-ui/core/Dialog";
import NavButton from "./NavButton";
import Link from "next/link";

const ScoreModal = ({ score, showScore, handleClose, categoryRaw, categoryFormatted, quizNameRaw }) => {
    // Switch statement for ScoreModal message based on quiz score
    let modalMessage = null;
    switch (score) {
        case 0:
            modalMessage = <h3 className={styles.h3}>Sorry, your launch has been scrubbed.</h3>;
            break;
        case 1:
        case 2:
        case 3:
            modalMessage = <h3 className={styles.h3}>You're suborbital - might need a bigger rocket.</h3>;
            break;
        case 4:
        case 5:
        case 6:
            modalMessage = <h3 className={styles.h3}>You're in Low Earth Orbit, how's the view?</h3>;
            break;
        case 7:
        case 8:
        case 9:
            modalMessage = <h3 className={styles.h3}>You're go for Trans-Lunar Injection! Nice job.</h3>;
            break;
        case 10:
            modalMessage = <h3 className={styles.h3}>That was a big step - you're standing on the Moon!</h3>;
            break;
        default:
            modalMessage = <h3 className={styles.h3}>Oops. Something went wrong.</h3>;
    }
    return (
        <Dialog open={showScore}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The Space Quiz</h2>
                </div>
                {modalMessage}
                <h3 className={styles.h3}>You scored {score} out of 10.</h3>
                <div className={styles.buttonBox}>
                    <div className={styles.repeatButton}>
                        <Link href={`/${categoryRaw.toLowerCase()}/${quizNameRaw.toLowerCase()}`} passHref>
                            <NavButton text="Try Again" />
                        </Link>
                    </div>
                    <div className={styles.homeButton}>
                        <Link href="/" passHref>
                            <NavButton text="Return to Earth" />
                        </Link>
                    </div>
                    <div className={styles.categoryButton}>
                        <Link href={`/${categoryRaw.toLowerCase()}/main`} passHref>
                            <NavButton text={`Return to ${categoryFormatted}`} />
                        </Link>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ScoreModal;
