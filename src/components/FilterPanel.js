import React, { useEffect, useState } from "react";
import {
    Box,
    makeStyles,
    createStyles,
    Typography,
    Divider,
    InputBase,
} from "@material-ui/core";
import CrossIcon from "../assets/images/cross.png";
import { useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
];

const FilterPanel = () => {
    const classes = useStyles();
    const filteredApplicantsList = useSelector(
        (state) => state.ApplicantsData.filteredApplicantsList
    );

    const [locationsArr, setLocationsArr] = useState([]);

    const pushLocation = (value) => {
        let sampleArr = locationsArr;
        sampleArr.push(value);

        setLocationsArr(sampleArr);
    };

    const handleLocation = (event, value) => {
        pushLocation(value.city);
    };

    return filteredApplicantsList.length ? (
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
                        {locationsArr.map((item) => `${item},`)}
                    </Typography>
                    <img src={CrossIcon} alt="cross-icon" />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add Location"
                />
                {/* <Autocomplete
                    id="combo-box-demo"
                    clearOnBlur={true}
                    options={filteredApplicantsList}
                    getOptionLabel={(option) => option.city}
                    style={{ width: 150 }}
                    onChange={handleLocation}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Combo box"
                            variant="outlined"
                        />
                    )}
                /> */}

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
                    <img src={CrossIcon} alt="cross-icon" />
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
                    <img src={CrossIcon} alt="cross-icon" />
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
                    <img src={CrossIcon} alt="cross-icon" />
                </Box>
                <InputBase
                    className={classes.inputBox}
                    placeholder="Add Experience"
                />
            </Box>
        </Box>
    ) : null;
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
