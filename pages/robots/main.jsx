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
                <title>Robotic Explorers | The Space Quiz</title>
                <meta
                    name="description"
                    content="Think you know about the history of robotic space exploration? Try our Robotic Explorers quiz."
                />
            </Head>
            <LightTooltip
                title="A section of the rings of Saturn pictured in fine detail by NASA's Cassini spacecraft in July 2017. Credit: NASA/JPL"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    alt="Saturn's rings"
                    src="https://dl.airtable.com/.attachmentThumbnails/95c7fb541b794b25015f615a0be9b7ba/adb09fa4"
                />
            </LightTooltip>
            <h1 className={styles.title}>Robotic Explorers</h1>
            <div className={styles.info}>
                <p className={styles.p}>
                    Since the dawn of the space age with Sputnik in 1957, countless spacecraft from many countries have
                    explored planets, moons, asteroids and comets throughout the Solar System, as well as exploring our
                    Sun.
                </p>
                <br />
                <p className={styles.p}>
                    Early exploratory spacecraft mostly conducted one-off flybys of their targets, performing
                    rudimentary scientific observations. With advancing technology through the 1970s and 1980s, orbiters
                    and landers allowed for longer missions and a greater scientific bounty.
                </p>
                <br />
                <p className={styles.p}>
                    Since the 1990s, several rover spacecraft including Sojourner, Curiosity and Perseverance with its
                    ground-breaking Ingenuity helicopter, have explored Mars and in the process, have become part of
                    popular culture.
                </p>
                <br />
                <p className={styles.p}>
                    Some of the most interesting missions of recent years involve returning asteroid material to Earth,
                    such as Japan's Hayabusa2 and NASA's OSIRIS-REX spacecraft.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <Link href="/robots/robots" passHref>
                    <NavButton text="Take Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
