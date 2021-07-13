import styles from "../styles/ScoreModal.module.css";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import NavButton from "./NavButton";
import Link from "next/link";

const ScoreModal = ({ score, showScore, handleClose, slug }) => {
    return (
        <Dialog open={showScore}>
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <IconButton className={styles.closeIcon} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <h3>You scored {score} out of 10.</h3>
                <div className={styles.buttonBox}>
                    <Link href="/" passHref>
                        <NavButton text="Return to Earth" />
                    </Link>
                    <Link href={`/${slug.toLowerCase()}/main`} passHref>
                        <NavButton text={`Return to ${slug}`} />
                    </Link>
                </div>
            </div>
        </Dialog>
    );
};

export default ScoreModal;
