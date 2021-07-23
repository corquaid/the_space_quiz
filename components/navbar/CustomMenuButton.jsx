import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "3rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "2rem",
        },
    }
}));

const MenuButton = ({ toggleDrawer, anchor }) => {
    const classes = useStyles();
    return (
        <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className={classes.root}/>
        </Button>
    );
};

export default MenuButton;