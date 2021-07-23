import styles from "../../styles/MainQuizPage.module.css";
import Link from "next/link";
import Head from "next/head";
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
            <Head>
                <title>Gemini | The Space Quiz</title>
                <meta name="description" content="Think you know the Gemini Program? Try our Gemini quizzes." />
            </Head>
            <LightTooltip
                title="The launch of Gemini XI in September 1966, carrying Commander Pete Conrad and Pilot Dick Gordon to orbit. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://www.nasa.gov/sites/default/files/thumbnails/image/s66-53900.jpg"
                    alt="Launch of Gemini 11"
                />
            </LightTooltip>
            <h1 className={styles.title}>Gemini</h1>
            <div className={styles.info}>
                <p className={styles.p}>
                    The Gemini Program was a crucial step for NASA on the path to the Moon in the mid-1960s, aiming to
                    pioneer new techniques such as spacewalking, rendezvous and docking, all required for future Apollo
                    missions.
                </p>
                <br />
                <p className={styles.p}>
                    Gemini was a compact, two-astronaut spacecraft which allowed for long-duration flights. It could be finely
                    controlled, almost flown like an airplane, much to the delight of the test pilot astronauts.
                </p>
                <br />
                <p className={styles.p}>
                    Astronauts launched aboard Gemini a total of ten times between March 1965 and November 1966.
                </p>
            </div>
            <div className={styles.buttonBox2}>
                <Link href="/gemini/missions" passHref>
                    <NavButton text="Missions & Machines Quiz" />
                </Link>
                <Link href="/gemini/people" passHref>
                    <NavButton text="People Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
