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
                title="The maiden launch of Space Shuttle Atlantis (OV-104) on mission STS-51-J, in October 1985. Credit: NASA"
                placement="top-start"
            >
                <img
                    className={styles.mainImage}
                    src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2011/07/first_launch_of_atlantis/9602540-3-eng-GB/First_launch_of_Atlantis_pillars.jpg"
                    alt="Maiden launch of Space Shuttle Atlantis"
                />
            </LightTooltip>
            <h2 className={styles.title}>Space Shuttle</h2>
            <div className={styles.info}>
                <p className={styles.p}>
                    Arguably the most famous family of spacecraft ever, the Space Shuttle fleet flew for over 30 years,
                    carrying over 350 individual astronauts and countless important payloads to Low Earth Orbit.
                </p>
                <br />
                <p className={styles.p}>
                    From its first flight when it launched like a rocket and landed like an airplane, the Shuttle was
                    instantly recognisable and went on to become a highly successful vehicle, despite two tragic
                    accidents and enormous costs.
                </p>
                <br />
                <p className={styles.p}>
                    The Space Shuttle's main legacy is two-fold: visible in the night sky as the International Space
                    Station, which would not exist without the Shuttle fleet and its unique lifting and spacewalking
                    capabilites; and also in the images and science from the Hubble Space Telescope which was launched
                    and visited on five servicing missions by the Shuttle.
                </p>
            </div>
            <div className={styles.buttonBox2}>
                <NavButton text="Easy Quiz" />
                <NavButton text="People Quiz" />
                <NavButton text="Missions & Machines 1" />
                <NavButton text="Missions & Machines 2" />
            </div>
        </div>
    );
};

export default Main;
