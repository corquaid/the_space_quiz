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
                title="Rocket Lab's Electron rocket rises from the launch pad in October 2019. Credit: Rocket Lab"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://dl.airtable.com/.attachmentThumbnails/07fe79a03f55f1df30a5362c32a49b48/e2f3db9a"
                    alt="Rocket Lab Electron launch"
                />
            </LightTooltip>
            <h2 className={styles.title}>Rocket Lab</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    Rocket Lab was founded in 2006 as a small space startup with a focus on the smallsat launch market
                    and after a decade of development, achieved orbit in January 2018.
                </p>
                <br />
                <p className={styles.p}>
                    Regular launches over several years and the use of some ground-breaking technologies has allowed Rocket Lab to
                    establish a market-leading position for smallsat launch.
                </p>
                <br />
                <p className={styles.p}>
                    Well-known for their cool mission names, slick mission control and relatively open, engaging public presence, Rocket Lab are pursuing development of some serious capabilities such as booster reusability (like SpaceX), multiple launch sites and a brand-new medium-lift launch vehicle aiming to be ready in 2024.
                </p>
            </div>
            <div className={styles.buttonBox1}>
                <CustomButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
