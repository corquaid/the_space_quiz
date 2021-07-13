import React from "react";
import styles from "../styles/AnswerButton.module.css";

const AnswerButton = ({ text, onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <a>
                <button className={styles.button} onClick={onClick}>
                    {text}
                </button>
            </a>
        </div>
    );
};

export default AnswerButton;
