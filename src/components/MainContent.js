import React, { useState, useEffect } from "react";
import {
    Box,
    makeStyles,
    createStyles,
    Checkbox,
    Divider,
    Button,
    Grid,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import Dp from "../assets/images/content-box/dp.png";
import Axios from "axios";

const MainContent = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const [applicants, setApplicants] = useState("");

    const getJobApplicants = async () => {
        const res = await Axios.get(
            "http://54.162.60.38/job/company/applicants/?company_id=Mg=="
        ).catch((err) => {
            throw err;
        });

        setApplicants(res.data.data);
    };

    useEffect(() => {
        getJobApplicants();
    }, []);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return applicants !== "" ? (
        <Box width="100%">
            <Box className={classes.contentBox}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    padding="1%"
                >
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    <Box display="flex" marginRight="11%">
                        <Button variant="text" className={classes.textButton}>
                            Move to next step
                        </Button>
                        <Button variant="text" className={classes.textButton}>
                            Reject
                        </Button>
                    </Box>
                </Box>
                <Divider className={classes.divider} />
                <Box height="500px" overflow="scroll">
                    {applicants.results.map((item, index) =>
                        item.applicants.map((appItem, index) => (
                            <Box padding="2%" key={index}>
                                <Box className={classes.profileCard}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={1} sm={1} align="left">
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{
                                                    "aria-label":
                                                        "primary checkbox",
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={10} sm={10} align="left">
                                            <Box display="flex">
                                                {appItem.skill.map(
                                                    (skillItem, index) =>
                                                        index < 3 && (
                                                            <Typography
                                                                key={index}
                                                                className={
                                                                    classes.skills
                                                                }
                                                            >
                                                                {
                                                                    skillItem.skill_name
                                                                }
                                                                ,
                                                            </Typography>
                                                        )
                                                )}
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <Divider
                                                className={classes.divider2}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={1} sm={1} align="left">
                                            <Box padding="12%">
                                                {appItem.profile_picture ===
                                                null ? (
                                                    <img
                                                        src={Dp}
                                                        className={classes.dp}
                                                        alt="profile-dp"
                                                    />
                                                ) : (
                                                    <img
                                                        className={classes.dp}
                                                        src={
                                                            appItem.profile_picture
                                                        }
                                                        alt="profile-dp"
                                                    />
                                                )}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={10} sm={10} align="left">
                                            <Box padding="1% 0%">
                                                <Box
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Typography
                                                        className={classes.name}
                                                    >
                                                        {appItem.first_name}
                                                    </Typography>
                                                    <Box
                                                        width="42%"
                                                        justifyContent="space-around"
                                                        display="flex"
                                                    >
                                                        {appItem.skill.map(
                                                            (
                                                                skillItem,
                                                                index
                                                            ) =>
                                                                index < 3 && (
                                                                    <Button
                                                                        variant="outlined"
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={
                                                                            classes.skillButton
                                                                        }
                                                                    >
                                                                        {
                                                                            skillItem.skill_name
                                                                        }
                                                                    </Button>
                                                                )
                                                        )}
                                                    </Box>
                                                </Box>

                                                <Typography
                                                    className={classes.degree}
                                                >
                                                    {
                                                        appItem.education.find(
                                                            (course) =>
                                                                course.is_current ===
                                                                true
                                                        ).degree
                                                    }{" "}
                                                    -{" "}
                                                    {
                                                        appItem.education.find(
                                                            (course) =>
                                                                course.is_current ===
                                                                true
                                                        ).specialization
                                                    }
                                                </Typography>
                                                <Typography
                                                    className={classes.college}
                                                >
                                                    {
                                                        appItem.education.find(
                                                            (course) =>
                                                                course.is_current ===
                                                                true
                                                        ).college_name
                                                    }
                                                    ,
                                                    {
                                                        appItem.education.find(
                                                            (course) =>
                                                                course.is_current ===
                                                                true
                                                        ).college_location
                                                    }
                                                </Typography>

                                                <Typography
                                                    className={classes.about}
                                                >
                                                    {appItem.about === null
                                                        ? ""
                                                        : appItem.about}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        ))
                    )}
                </Box>
            </Box>
        </Box>
    ) : (
        <Box>
            <CircularProgress />
        </Box>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        contentBox: {
            background: "#FFFFFF",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
        },
        divider: {
            backgroundColor: "#000000",
            height: "2px",
        },
        profileCard: {
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
        },
        divider2: {
            backgroundColor: "#BDBDBD",
            height: "1px",
        },
        dp: {
            width: "56px",
            height: "56px",
        },
        skillButton: {
            background: "#FFFFFF",
            border: "1px solid #000000",
            borderRadius: "18px",
            height: "31px",
        },
        textButton: {
            fontSize: "14px",
            fontFamily: "OpenSans",
            fontWeight: "bold",
            textTransform: "capitalize",
        },
        skills: {
            fontSize: "14px",
            fontFamily: "Proxima",
        },
        name: {
            fontSize: "14px",
            fontFamily: "Proxima",
            color: "#424242",
        },
        degree: {
            fontSize: "14px",
            fontFamily: "OpenSans",
            fontWeight: "bold",
        },
        college: {
            fontSize: "14px",
            fontFamily: "OpenSans",
            fontWeight: "bold",
            color: "#424242",
            margin: "1% 0%",
        },
        about: {
            fontSize: "16px",
            fontFamily: "Proxima",
            color: "#828282",
        },
    })
);

export default MainContent;
