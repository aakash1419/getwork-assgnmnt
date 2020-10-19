import React from "react";
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    Divider,
    InputBase,
} from "@material-ui/core";
import CrossIcon from "../assets/images/cross.png";

const FilterPanel = () => {
    const classes = useStyles();

    return (
        <Box>
            <Typography className={classes.panelTitle}>Filters</Typography>
            <Divider className={classes.divider} />
            <Box padding="4%">
                <Typography className={classes.filterBoxTitle}>
                    Location
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography className={classes.filterBoxSubtitle}>
                        Gurgaon, Delhi
                    </Typography>
                    <img src={CrossIcon} />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add Location"
                />

                <Divider className={classes.divider2} />

                <Typography className={classes.filterBoxTitle}>
                    Passout year
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography className={classes.filterBoxSubtitle}>
                        2017 - 2020
                    </Typography>
                    <img src={CrossIcon} />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add passout year"
                />

                <Divider className={classes.divider2} />

                <Typography className={classes.filterBoxTitle}>
                    Colleges
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography className={classes.filterBoxSubtitle}>
                        IIM. Ahmedabad
                    </Typography>
                    <img src={CrossIcon} />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add colleges"
                />

                <Divider className={classes.divider2} />

                <Typography className={classes.filterBoxTitle}>
                    Work Experience
                </Typography>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography className={classes.filterBoxSubtitle}>
                        1 year
                    </Typography>
                    <img src={CrossIcon} />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add Experience"
                />
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        panelTitle: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#000",
            fontFamily: "OpenSans",
        },
        divider: {
            backgroundColor: "#BDBDBD",
            height: "2px",
        },
        inputBox: {
            background: "#F2F2F2",
            boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
            padding: "0% 4%",
            marginBottom: "10%",
        },
        filterBoxTitle: {
            fontSize: "18px",
            color: "#000",
            textAlign: "left",
            fontFamily: "Proxima",
        },
        filterBoxSubtitle: {
            fontSize: "18px",
            color: "#424242",
            margin: "4% 0%",
            fontFamily: "Proxima",
        },
        divider2: {
            backgroundColor: "#BDBDBD",
            height: "2px",
            marginBottom: "4%",
        },
    })
);

export default FilterPanel;
