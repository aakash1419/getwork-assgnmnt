import React from "react";
import { Box, makeStyles, createStyles } from "@material-ui/core";
import SidePanel from "./components/SidePanel";

const Layout = () => {
    const classes = useStyles();

    return (
        <Box>
            <SidePanel />
        </Box>
    );
};

const useStyles = makeStyles((theme) => createStyles({}));

export default Layout;
