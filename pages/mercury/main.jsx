import styles from "../../styles/MainQuizPage.module.css";
import Link from "next/link";
import NavButton from "../../components/NavButton";
import Tooltip from "@material-ui/core/Tooltip";
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
                title="Alan Shepard sits pensively in his Mercury capsule prior to his historic flight in May 1961. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Alan_Shepard_in_capsule_aboard_Freedom_7_before_launch.jpg"
                    alt="Alan Shepard in his Mercury capsule before his historic flight"
                />
            </LightTooltip>
            <h2 className={styles.title}>Mercury</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    Project Mercury was America's first human spaceflight program, created with the goal of putting the
                    first American in Earth orbit.
                </p>
                <br />
                <p className={styles.p}>
                    The Mercury spacecraft, with room for only a single occupant, were launched atop converted ballistic
                    missiles from Cape Canaveral in Florida on six occasions between May 1961 and May 1963.
                </p>
                <br />
                <p className={styles.p}>
                    The iconic first group of astronauts were selected by NASA for Project Mercury and were known as the
                    Mercury Seven.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <Link href="/mercury/mercury" passHref>
                    <NavButton text="Take Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
