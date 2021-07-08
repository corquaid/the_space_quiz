import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.copyright}>&copy; {new Date().getFullYear()} The Space Quiz.</div>
                <a href="https://twitter.com/thespacequiz" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} color="#000" size="2x" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
