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
import Dp from "../../assets/images/content-box/dp.png";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getApplicants, filterList, changeApplicantStatus } from "./action";

const MainContent = ({ jobTitle }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const applicants = useSelector((state) => state.ApplicantsData.applicants);
    const status = useSelector((state) => state.ApplicantsData.applicantStatus);
    const filteredApplicantsList = useSelector(
        (state) => state.ApplicantsData.filteredApplicantsList
    );

    const [checked, setChecked] = React.useState(true);
    const [loader, setLoader] = useState(true);
    const [reqBody, setReqBody] = useState([]);
    const [rejectedReqBody, setRejectedReqBody] = useState([]);
    const [checkboxesState, setCheckBoxesState] = useState([]);
    const [checkboxIndex, setCheckBoxIndex] = useState(null);

    useEffect(() => {
        setCheckBoxesState(filteredApplicantsList.map((item) => false));
    }, [filteredApplicantsList]);

    useEffect(() => {
        dispatch(getApplicants(setLoader));
    }, []);

    const toggleCheckBox = (event, id) => {
        setCheckBoxesState(
            filteredApplicantsList.map((item, index) => {
                if (index === id) {
                    return event.target.checked;
                } else return checkboxesState[index];
            })
        );
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const declareJobStatus = (value) => {
        switch (value) {
            case 1:
                return 8;
            case 8:
                return 2;
            case 2:
                return 7;
            case 7:
                return 13;
            case 13:
                return 14;
            default:
                return 1;
        }
    };

    const generateReqBody = () => {
        setReqBody(
            filteredApplicantsList
                .map((item, index) => {
                    if (checkboxesState[index] === true) {
                        return {
                            id: item.applicant_id,
                            round: item.round,
                            status: declareJobStatus(item.status),
                            user_id: item.user_id,
                            job_id: item.job_id,
                        };
                    }
                })
                .filter((item) => item !== undefined)
        );
    };

    const generateRejectedReqBody = () => {
        setRejectedReqBody(
            filteredApplicantsList
                .map((item, index) => {
                    if (checkboxesState[index] === true) {
                        return {
                            id: item.applicant_id,
                            round: item.round,
                            status: 14,
                            user_id: item.user_id,
                            job_id: item.job_id,
                        };
                    }
                })
                .filter((item) => item !== undefined)
        );
    };

    useEffect(() => {
        if (filteredApplicantsList.length) {
            generateReqBody();
            generateRejectedReqBody();
        }
    }, [filteredApplicantsList, checkboxesState]);

    const declareApplicantStatus = () => {
        switch (status) {
            case "Applied":
                return "Review";
            case "Review":
                return "Shortlisted";
            case "Shortlisted":
                return "Interviewed";
            case "Interview":
                return "Rejected";
            case "Rejected":
                return "Hired";
            default:
                return "";
        }
    };

    const moveToNext = async () => {
        const res = await Axios({
            method: "POST",
            url: "http://54.162.60.38/job/company/status_update/",
            data: {
                student_data: reqBody,
            },
        });
        dispatch(getApplicants(setLoader));
        dispatch(changeApplicantStatus(declareApplicantStatus()));
    };

    const handleReject = async () => {
        const res = await Axios({
            method: "POST",
            url: "http://54.162.60.38/job/company/status_update/",
            data: {
                student_data: rejectedReqBody,
            },
        });
        dispatch(getApplicants(setLoader));
        dispatch(changeApplicantStatus(declareApplicantStatus()));
    };

    useEffect(() => {
        if (!loader) {
            if (jobTitle === "All") {
                dispatch(
                    filterList(
                        applicants.results
                            .map((item) =>
                                item.applicants.filter(
                                    (item) => item.status_name === status
                                )
                            )
                            .flat()
                    )
                );
            } else
                dispatch(
                    filterList(
                        applicants.results
                            .filter((item) => item.job_title === jobTitle)
                            .map((item) =>
                                item.applicants.filter(
                                    (item) => item.status_name === status
                                )
                            )
                    )
                );
        }
    }, [loader, jobTitle, status, applicants]);

    return !loader && filteredApplicantsList.length ? (
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
                        <Button
                            variant="text"
                            className={classes.textButton}
                            onClick={() => moveToNext()}
                        >
                            Move to next step
                        </Button>
                        <Button
                            variant="text"
                            className={classes.textButton}
                            onClick={() => handleReject()}
                        >
                            Reject
                        </Button>
                    </Box>
                </Box>
                <Divider className={classes.divider} />
                <Box height="500px" overflow="scroll">
                    {Array.isArray(filteredApplicantsList[0]) &&
                    filteredApplicantsList[0].length ? (
                        filteredApplicantsList[0].map((appItem, index) => (
                            <Box padding="2%" key={index}>
                                <Box className={classes.profileCard}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={1} sm={1} align="left">
                                            <Checkbox
                                                checked={checkboxesState[index]}
                                                onChange={(e) =>
                                                    toggleCheckBox(e, index)
                                                }
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
                    ) : !Array.isArray(filteredApplicantsList[0]) &&
                      jobTitle === "All" ? (
                        filteredApplicantsList.map((appItem, index) => (
                            <Box padding="2%" key={index}>
                                <Box className={classes.profileCard}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={1} sm={1} align="left">
                                            <Checkbox
                                                checked={checkboxesState[index]}
                                                onChange={(e) =>
                                                    toggleCheckBox(e, index)
                                                }
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
                    ) : (
                        <p>no content</p>
                    )}
                </Box>
            </Box>
        </Box>
    ) : (
        <Box height="500px" padding="20% 45%" boxSizing="border-box">
            {/* <CircularProgress /> */}
            <p>no content</p>
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
