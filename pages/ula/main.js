import styles from "../../styles/MainQuizPage.module.css";
import CustomButton from "../../components/CustomButton";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';


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
            <LightTooltip title="The giant Delta IV Heavy rocket carrying NASA's Parker Solar Probe lifts off in August 2018. Credit: NASA" placement="top-start">
                <img
                    className={styles.mainImage}
                    src="https://www.nasa.gov/sites/default/files/thumbnails/image/psplaunch-1.jpg"
                    alt="Delta 4 Heavy launch"
                />
            </LightTooltip>
            <h2 className={styles.title}>United Launch Alliance</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    ULA was formed in 2006 and brought the Atlas and Delta rocket families under the same roof, providing unrivalled US launch capability for the next decade.
                </p>
                <br />
                <p className={styles.p}>
                    In the intervening years, other launch providers have challenged ULA's dominance of the launch market, most successfully SpaceX, but ULA still launch the majority of high-value scientific and national security spacecraft for NASA and the US Government.
                </p>
                <br />
                <p className={styles.p}>
                    Priding themselves on their flawless launch record and unmatched orbital accuracy, especially for interplanetary science missions, ULA continue to innovate, with their next-generation Vulcan Centaur rocket due to launch in early 2022.
                </p>
                
            </div>
            <div className={styles.buttonBox1}>
                <CustomButton text="Take Quiz" />
            </div>
        </div>
    );
};

export default Main;
