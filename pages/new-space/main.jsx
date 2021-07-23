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
                <title>New Space | The Space Quiz</title>
                <meta name="description" content="Think you know about the New Space race? Try our New Space quiz." />
            </Head>
            <LightTooltip
                title="Virgin Orbit's air-launched LauncherOne rocket is released from the Boeing 747 carrier aircraft during a test flight. Credit: Virgin Orbit"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://dl.airtable.com/.attachmentThumbnails/25784f120c3976b1e4d52f619b8d905f/7cd5b747"
                    alt="VIrgin Orbit air launch rocket"
                />
            </LightTooltip>
            <h1 className={styles.title}>New Space</h1>
            <div className={styles.info}>
                <p className={styles.p}>
                    Since 2000, there has been a new wave of aerospace companies, mostly privately-funded, seeking to
                    provide greater access to space and achieve different goals.
                </p>
                <br />
                <p className={styles.p}>
                    Some companies like Virgin Orbit, Astra, Firefly Aerospace, Relativity and Skyrora aim to offer
                    low-cost access to space for smaller payloads. Blue Origin have grander ambitions with huge,
                    heavy-lift rockets in development along with powerful, next-generation rocket engines. Sierra Nevada
                    Corporation will fly a reusable cargo spaceplane to the ISS in 2022 on ULA's Vulcan rocket.
                </p>
                <br />
                <p className={styles.p}>
                    Several other small aerospace outfits operate around the world all with the goal of crossing the
                    Kármán line and reaching the inky black night.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <Link href="/new-space/newspace" passHref>
                    <NavButton text="Take Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
