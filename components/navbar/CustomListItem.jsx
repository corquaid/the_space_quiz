import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        backgroundColor: "inherit",
        fontSize: "1.2rem",
        fontFamily: "helveticabold",
        textAlign: "center",
        "&:hover": {
            backgroundColor: "#1f2833",
            color: "#fff",
        },
        "&:active": {
            backgroundColor: "#45a29e",
        },
    },
});

const CustomListItem = React.forwardRef(({ text, href }, ref) => {
    const classes = useStyles();
    return (
        <ListItem button component="a" href={href} className={classes.button}>
            <ListItemText disableTypography primary={text} />
        </ListItem>
    );
});

export default CustomListItem;
