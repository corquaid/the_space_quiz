import Link from "next/link";
import NavButton from "../components/NavButton";
import styles from "../styles/404.module.css";

export default function FiveHundred() {
    return (
        <div className={styles.container}>
            <h1>Server Error 500 - Don't Panic...</h1>
            <br/>
            <Link href="/" passHref>
                <NavButton text="Return to Earth"/>
            </Link>
        </div>
    );
}
