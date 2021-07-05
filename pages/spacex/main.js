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
            <LightTooltip title="Falcon 9 emerges through the fog layer after launch from Vandenberg Space Force Base on the Radarsat mission in June 2019. Credit: SpaceX" placement="top-start">
                <img
                    className={styles.mainImage}
                    src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2019/06/48052224858_d0261c665c_k.jpg"
                    alt="Falcon 9 launching June 2019"
                />
            </LightTooltip>
            <h2 className={styles.title}>SpaceX</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    Founded in 2002, SpaceX has gone onto to become on the world's most innovative and exciting aerospace companies, having first reached orbit in 2008.
                </p>
                <br />
                <p className={styles.p}>
                    With reusability and low-cost as key measures of success, SpaceX have reshaped the launch industry with their now customary booster landings, reusable cargo and crew spacecraft and most recently, human spaceflight to the ISS.
                </p>
                <br />
                <p className={styles.p}>
                    Perhaps the most important of achievement of SpaceX is to ingite a new wave of interest and wonder in spaceflight and rocket technology in an industry that can seem stuffy and old-fashioned.
                </p>
                
            </div>
            <div className={styles.buttonBox2}>
                <CustomButton text="Easy Quiz" />
                <CustomButton text="Missions Quiz" />
                <CustomButton text="Machines Quiz" />
            </div>
        </div>
    );
};

export default Main;
