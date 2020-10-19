import React from "react";
import {
    Box,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Logo from "../assets/images/logo.png";
import AddIcon from "@material-ui/icons/Add";
import ArrowDown from "../assets/images/arrow-down.png";
import ArrowRight from "../assets/images/arrow-right.png";
import HomeIcon from "../assets/images/home.png";
import JobsIcon from "../assets/images/jobs.png";
import ManageIcon from "../assets/images/manage.png";
import CampusIcon from "../assets/images/campus.png";
import RelationshipIcon from "../assets/images/relationship.png";
import TopPanel from "./TopPanel";

const SidePanel = () => {
    const classes = useStyles();

    const sideMenus = [
        {
            menu: "Home",
            icon: HomeIcon,
            subMenu: ["Applicants", "Track", "Interview", "Source"],
        },
        {
            menu: "Jobs",
            icon: JobsIcon,
            subMenu: ["Applicants", "Track", "Interview", "Source"],
        },
        {
            menu: "Relationships",
            icon: RelationshipIcon,
            subMenu: ["Applicants", "Track", "Interview", "Source"],
        },
        {
            menu: "Campus",
            icon: CampusIcon,
            subMenu: ["Applicants", "Track", "Interview", "Source"],
        },
        {
            menu: "Manage",
            icon: ManageIcon,
            subMenu: ["Applicants", "Track", "Interview", "Source"],
        },
    ];

    return (
        <Box>
            <TopPanel />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <Box display="flex" alignItems="center">
                    <img src={Logo} className={classes.logo} />
                    <Box className={classes.colorSelectorBox}></Box>
                </Box>
                <Button
                    className={classes.createJobButton}
                    endIcon={<AddIcon />}
                >
                    Create job
                </Button>

                {sideMenus.map((item, index) => (
                    <Accordion className={classes.accordion} key={index}>
                        <AccordionSummary
                            classes={{
                                expandIcon: classes.expandIcon,
                                expanded: classes.expanded,
                            }}
                            expandIcon={<img src={ArrowRight} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                width="100%"
                            >
                                <img
                                    src={item.icon}
                                    className={classes.expandIcon}
                                />
                                <Typography
                                    className={classes.sidePanelMenuText}
                                >
                                    {item.menu}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="end"
                                paddingLeft="33%"
                            >
                                {item.subMenu.map((item, index) => (
                                    <Typography
                                        className={classes.submenuText}
                                        key={index}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Drawer>
        </Box>
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
        drawer: {
            width: "220px",
        },
        drawerPaper: {
            width: "220px",
        },
        logo: {
            width: "137px",
            height: "auto",
        },
        colorSelectorBox: {
            background: "#000000",
            borderRadius: 4,
            width: "47px",
            height: "47px",
        },
        createJobButton: {
            width: "152px",
            height: "36px",
            backgroundColor: "#3282C4",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 4,
            fontFamily: "OpenSans",
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#fff",
            alignSelf: "center",
            margin: "18% 0%",
            "&:hover": {
                backgroundColor: "#3282C4",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            },
        },
        listIcon: {
            minWidth: "36px",
        },
        listIcon2: {
            minWidth: "16px",
        },
        accordion: {
            boxShadow: "none",
        },
        expandIcon: {
            "&$expanded": {
                transform: "rotate(90deg)",
            },
        },
        expanded: {},
        sidePanelMenuText: {
            marginLeft: "10%",
            fontFamily: "Proxima",
            fontSize: "18px",
        },
        submenuText: {
            fontFamily: "Proxima",
            fontSize: "18px",
            marginBottom: "7%",
        },
    })
);

export default SidePanel;
