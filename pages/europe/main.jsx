import styles from "../../styles/MainQuizPage.module.css";
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
                title="Comet 67P/Churyumov-Gerasimenko photographed in March 2015 by the Rosetta spacecraft of the European Space Agency. Credit: ESA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/05/rosetta_s_comet/15356083-1-eng-GB/Rosetta_s_comet_pillars.jpg"
                    alt="Comet 67P/Churyumov-Gerasimenko"
                />
            </LightTooltip>
            <h2 className={styles.title}>Europe In Space</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    Europe has a long and varied history in space, going back to the Diamant and Europa rockets, the
                    ancestors of the Ariane rocket family, Europe's flagship rocket with the Ariane 6 currenty in
                    development.
                </p>
                <br />
                <p className={styles.p}>
                    As well as launch vehicles, European countries and their space agency, ESA, have an outstanding
                    record of producing interplanetary spacecraft that have visited planets, moons and comets over the
                    last 40 years.
                </p>
                <br />
                <p className={styles.p}>
                    Europe also has its own astronaut corps and is a key partner in the ISS program, collaborating with
                    NASA on major projects such as Artemis and the Hubble Space Telescope.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <NavButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
