import styles from '../styles/CustomButton.module.css';

const CustomButton = ({text}) => {
    return ( 
        <div className={styles.buttonContainer}>
            <button className={styles.button}>
                {text}
            </button>
        </div>
     );
}
 
export default CustomButton;