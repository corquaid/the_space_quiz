import styles from "../../styles/MainQuizPage.module.css";
import NavButton from "../../components/NavButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.grey,
        color: "white",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const Main = () => {
    return (
        <div className={styles.mainContent}>
            <LightTooltip
                title="Launch of Apollo 4, the maiden launch of Saturn V, from Pad 39A of Kennedy Space Center in November 1967. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Launch_Apollo4.jpg"
                    alt="Maiden launch of Saturn V rocket on Apollo 4"
                />
            </LightTooltip>
            <h2 className={styles.title}>Apollo</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    The Apollo lunar missions remain the peak of human space exploration and occupy a unique place in
                    human history. Accomplished with amazing feats of ingenuity and engineering, the Apollo Program
                    scaled heights in the 1960s and early 1970s that could never really be surpassed in the changing
                    world of the following decade.
                </p>
                <br />
                <p className={styles.p}>
                    From the brave astronauts and tenacious mission control teams to the famous Saturn V rocket and
                    Lunar Module, Apollo forever changed how humans look upon the Solar System.
                </p>
            </div>
            <div className={styles.buttonBox2}>
                <Link href="/apollo/easy" passHref>
                    <NavButton text="Easy Quiz" />
                </Link>
                <Link href="/apollo/missions" passHref>
                    <NavButton text="Missions Quiz" />
                </Link>
                <Link href="/apollo/people" passHref>
                    <NavButton text="People Quiz" />
                </Link>
                <Link href="/apollo/saturn" passHref>
                    <NavButton text="Saturn V Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
