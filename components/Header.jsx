import styles from "../styles/Header.module.css";
import Link from "next/link";
import MUIDrawer from "./navbar/MUIDrawer";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Link href="/">The Space Quiz</Link>
                </div>
                
                <MUIDrawer />
                
            </div>
        </div>
    );
};

export default Header;
