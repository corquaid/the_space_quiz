import styles from "../../styles/MainQuizPage.module.css";
import CustomButton from "../../components/CustomButton";
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
                title="Cosmonaut Valeri Polyakov pictured as Shuttle Discovery approaches the Mir space station in February 1995. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Cosmonaut_Polyakov_Watches_Discovery%27s_Rendezvous_With_Mir_%289458248491%29.jpg"
                    alt="Cosmonaut Valeri Polyakov on Mir in February 1995"
                />
            </LightTooltip>
            <h2 className={styles.title}>Russia In Space</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    The Soviet Union was the early front-runner in the Space Race of the 1950s and 1960s, achieving
                    several firsts, notably Sputnik, the first man and first woman in space and the first spacewalk.
                </p>
                <br />
                <p className={styles.p}>
                    However, from the mid-1960s onwards, the Soviet space program fell behind the competing United
                    States and became less ambitious and more cautious.
                </p>
                <br />
                <p className={styles.p}>
                    In the 21st century, Russia is a joint founding partner of the ISS and transported all astronauts to
                    the ISS between 2011 and 2020.
                </p>
                <br />
                <p className={styles.p}>
                    Russia continues to operate extensive science and spaceflight programs with plans  for next-generation rockets such as Soyuz-5 and Angara, as well as lunar cooperation with China.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <CustomButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
