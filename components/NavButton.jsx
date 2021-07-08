import React from "react";
import styles from "../styles/NavButton.module.css";

const NavButton = React.forwardRef(({ text, href }, ref) => {
    return (
        <div className={styles.buttonContainer}>
            <a ref={ref} href={href}>
                <button className={styles.button}>
                    {text}
                </button>
            </a>
        </div>
    );
});

export default NavButton;
