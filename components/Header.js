import styles from "../styles/Header.module.css";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link href="/">The Space Quiz</Link>
                </div>
                <div className={styles.linksContainer}>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.link}>About</a>
                    </Link>
                    <Link href="/spacestuff">
                        <a className={styles.link}>Space Stuff</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
