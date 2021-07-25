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
                <title>Artemis | The Space Quiz</title>
                <meta name="description" content="Think you know the Artemis Program? Try our Artemis quiz." />
            </Head>
            <LightTooltip
                title="Artists' impression of the Lunar Starship Human Landing System on the Moon in the 2020s. Credit: SpaceX"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://dl.airtable.com/.attachmentThumbnails/2f51b597e0c6a598488bea764d005ac5/cdc35f63"
                    alt="Starship on the Moon"
                />
            </LightTooltip>
            <h1 className={styles.title}>Artemis</h1>
            <div className={styles.info}>
                <p className={styles.p}>
                    The Artemis program, led by NASA with several international space agency partners, will deliver the
                    long-awaited return of humans to the Moon after over 50 years spent in Low Earth Orbit.
                </p>
                <br />
                <p className={styles.p}>
                    Utilising both tried and trusted designs and state-of-the-art technology, new rockets and spacecraft
                    are in the final stages of development ahead of the launch of Artemis 1 in late 2021.
                </p>
                <br />
                <p className={styles.p}>
                    Unlike the Apollo era, Artemis will rely not only on traditional NASA-owned hardware, such as SLS, but
                    also on the capabilities of the commercial space industry with companies such as SpaceX, Blue
                    Origin, ULA, Sierra Nevada Corporation and Masten Space all involved in a collaborative effort to
                    return to the Moon. Hopefully, this time for good.
                </p>
                <br />
                <p className={styles.p}>
                    Artemis is likely to remain a political football in the coming years but the progress is undeniable
                    and the momentum is bound for the Moon.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <Link href="/artemis/artemis" passHref>
                    <NavButton text="Take Quiz" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
