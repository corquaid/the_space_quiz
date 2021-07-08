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
                title="Astronaut Stephen Robinson pictured on the extended Canadarm-2 during a spacewalk from the International Space Station in July 2005. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://images-assets.nasa.gov/image/0501013/0501013~medium.jpg"
                    alt="ISS spacewalk"
                />
            </LightTooltip>
            <h2 className={styles.title}>Space Stations</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    From Salyut and Skylab to Mir, Tiangong and the ISS, over the past 50 years, space stations have
                    allowed humans to live and work for extended periods in the microgravity environment of Low Earth
                    Orbit.
                </p>
                <br />
                <p className={styles.p}>
                    Astronauts perform invaluable scientific investigations and most importantly act as test subjects to
                    study the physical and psychological effects of long-duration spaceflight.
                </p>
                <br />
                <p className={styles.p}>
                    Early space stations were rudimentary and, apart from Skylab, were relatively cramped. The
                    International Space Station is different - a $150 billion jewel in the sky, the most complex and
                    expensive engineering project ever completed.
                </p>
                <br />
                <p className={styles.p}>
                    China is now operating a new space station of its own and the next space station may even orbit the
                    Moon.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <NavButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
