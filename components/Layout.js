import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.sideMargin}></div>
            <div className={styles.contentContainer}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
            <div className={styles.sideMargin}></div>
        </div>
    );
};

export default Layout;
