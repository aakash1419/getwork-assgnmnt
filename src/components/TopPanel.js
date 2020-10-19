import React, { Fragment, useState } from "react";
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
    const [selectedTab, setSelectedTab] = useState(1);

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
                        <img src={CalendarIcon} alt="calendar" />
                        <img src={ChatIcon} alt="chat-icon" />
                        <img src={NotificationIcon} alt="notification-icon" />
                        <img src={ProfileIcon} alt="profile-icon" />
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
                        <Box
                            onClick={() => setSelectedTab(1)}
                            style={
                                selectedTab === 1
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 1
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Applicants
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setSelectedTab(2)}
                            style={
                                selectedTab === 2
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          left: "22%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          left: "22%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 2
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Review
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setSelectedTab(3)}
                            style={
                                selectedTab === 3
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          left: "30%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          left: "30%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 3
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Shortlisted
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setSelectedTab(4)}
                            style={
                                selectedTab === 4
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          left: "40%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          left: "40%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 4
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Interviewed
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setSelectedTab(5)}
                            style={
                                selectedTab === 5
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          left: "50%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          left: "50%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 5
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Rejected
                            </Typography>
                        </Box>
                        <Box
                            onClick={() => setSelectedTab(6)}
                            style={
                                selectedTab === 6
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          boxShadow:
                                              "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                                          backgroundColor: "#E5E5E5",
                                          position: "absolute",
                                          top: "43%",
                                          left: "58%",
                                          borderRadius: "4px 4px 0px 0px",
                                          cursor: "pointer",
                                      }
                                    : {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          padding: "1px 12px",
                                          height: "40px",
                                          position: "absolute",
                                          top: "43%",
                                          left: "58%",
                                          cursor: "pointer",
                                      }
                            }
                        >
                            <Typography
                                className={
                                    selectedTab === 6
                                        ? classes.selectedTabText
                                        : classes.normalTabText
                                }
                            >
                                Hired
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
            position: "relative",
        },
        headerTitle: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
            fontFamily: "OpenSans",
        },
        headerTitle2: {
            fontSize: "18px",
            color: "#000000",
            fontFamily: "Proxima",
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
            padding: "0% 2%",
        },
        selectedTabText: {
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Proxima",
        },
        normalTabText: {
            color: "#000",
            fontSize: "18px",

            fontFamily: "Proxima",
        },
        selectedTab: {
            height: "40px",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#E5E5E5",
            position: "absolute",
            top: "43%",
            borderRadius: "4px 4px 0px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px 12px",
        },
        normalTab: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px 12px",
            height: "40px",
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
