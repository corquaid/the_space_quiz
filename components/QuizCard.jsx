import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/QuizCard.module.css";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.grey,
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);

const QuizCard = React.forwardRef(({ title, image, tooltip }, ref) => {
    return (
        <LightTooltip title={tooltip} placement="top-start" >
            <div className={styles.cardBody} ref={ref}>
                <h3 className={styles.h3}>{title}</h3>
                <img className={styles.cardImage} src={image} />
            </div>
        </LightTooltip>
    )
})
    
        
    


export default QuizCard;
