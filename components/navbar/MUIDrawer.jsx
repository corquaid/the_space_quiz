import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CustomMenuButton from "./CustomMenuButton";
import CustomListItem from "./CustomListItem";

const useStyles = makeStyles({
    list: {
        width: 200,
    },
});

const TemporaryDrawer = open => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link href="/" passHref>
                    <CustomListItem text="Home" />
                </Link>
                <Link href="/about" passHref>
                    <CustomListItem text="About" />
                </Link>
                <Link href="/contact" passHref>
                    <CustomListItem text="Contact" />
                </Link>
            </List>
        </div>
    );

    return (
        <div>
            {["right"].map(anchor => (
                <React.Fragment key={anchor}>
                    <CustomMenuButton toggleDrawer={toggleDrawer} anchor={anchor} open={open} />
                    <Drawer
                        className={classes.drawer}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default TemporaryDrawer;
