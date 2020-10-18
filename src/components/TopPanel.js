import React, { Fragment } from "react";
import {
    Box,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    Typography,
    Select,
    MenuItem,
    InputBase,
} from "@material-ui/core";
import ChatIcon from "../assets/images/top-panel/chat.png";
import CalendarIcon from "../assets/images/top-panel/calendar.png";
import NotificationIcon from "../assets/images/top-panel/notification.png";
import ProfileIcon from "../assets/images/top-panel/profile.png";
import MainContent from "./MainContent";
import FilterPanel from "./FilterPanel";

const TopPanel = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Typography
                        variant="h6"
                        noWrap
                        className={classes.headerTitle}
                    >
                        Track
                    </Typography>
                    <Box
                        width="14%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <img src={CalendarIcon} />
                        <img src={ChatIcon} />
                        <img src={NotificationIcon} />
                        <img src={ProfileIcon} />
                    </Box>
                </Toolbar>
            </AppBar>
            <AppBar
                position="fixed"
                className={classes.appBar}
                style={{ marginTop: "68px" }}
            >
                <Toolbar className={classes.toolBar}>
                    <Box
                        display="flex"
                        alignItems="center"
                        width="30%"
                        justifyContent="space-around"
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            className={classes.headerTitle2}
                        >
                            Profile
                        </Typography>
                        <Select
                            variant="outlined"
                            value={10}
                            className={classes.dropdown}
                        >
                            <MenuItem value={10}>All Applications</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Box>
                    <InputBase
                        placeholder="Search"
                        className={classes.searchBox}
                    />
                </Toolbar>
            </AppBar>
            <AppBar
                position="fixed"
                className={classes.appBar}
                style={{ marginTop: "136px" }}
            >
                <Toolbar className={classes.toolBar}>
                    <Box
                        display="flex"
                        alignItems="center"
                        width="30%"
                        justifyContent="space-around"
                    >
                        <Box className={classes.selectedTab}>
                            <Typography className={classes.selectedTabText}>
                                Applicants
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Box
                    className={classes.mainContentBox}
                    style={{ marginTop: "200px" }}
                >
                    <MainContent />
                </Box>
                <Box className={classes.filterPanel} paddingTop="210px">
                    <FilterPanel />
                </Box>
            </Box>
        </Fragment>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            width: `calc(100% - 220px)`,
            marginLeft: "220px",
            background: "#ffffff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        toolBar: {
            display: "flex",
            justifyContent: "space-between",
        },
        headerTitle: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
        },
        headerTitle2: {
            fontSize: "18px",
            color: "#000000",
        },
        dropdown: {
            width: "220px",
            height: "36px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        },
        searchBox: {
            width: "219px",
            height: "36px",
            background: "#F2F2F2",
            boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 4,
        },
        selectedTabText: {
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
        },
        mainContentBox: {
            width: `calc(100% - 220px)`,
            marginLeft: "220px",
            background: "#E5E5E5",
            padding: "1% 2%",
            boxSizing: "border-box",
            display: "flex",
        },
        filterPanel: {
            background: "#FFFFFF",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            width: "240px",
        },
    })
);

export default TopPanel;
