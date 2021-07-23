import Link from "next/link";
import NavButton from "../components/NavButton";
import styles from "../styles/404.module.css";

export default function FourOhFour() {
    return (
        <div className={styles.container}>
            <h1>Error 404 - Don't Panic...</h1>
            <br/>
            <Link href="/" passHref>
                <NavButton text="Return to Earth"/>
            </Link>
        </div>
    );
}
