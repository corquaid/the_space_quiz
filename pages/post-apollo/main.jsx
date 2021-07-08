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
                title="NASA's first space station, Skylab, pictured in orbit in 1973. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Skylab_3_flyaround.jpg/800px-Skylab_3_flyaround.jpg"
                    alt="Skylab in orbit"
                />
            </LightTooltip>
            <h2 className={styles.title}>Post-Apollo</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    In the years following the final Apollo Moon landings, NASA pursued some worthwhile projects, namely
                    the Skylab space station, an Apollo offshoot, and a joint US-Soviet mission, the Apollo-Soyuz Test
                    Project, the first such co-operative endeavour.
                </p>
                <br />
                <p className={styles.p}>
                    While not coming close to the excitement or wonder of humans walking on the Moon, these missions
                    were crucial in defining what we now consider everyday spaceflight operations: living and working
                    successfully in Earth orbit with multiple international partners.
                </p>
                <br />
                <p className={styles.p}>
                    And of course, during the 1970s, NASA bgan development on their new reusable space shuttle.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <NavButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
