import Axios from "axios";

export const GET_APPLICANTS = "GET_APPLICANTS";
export const FILTER_LIST = "FILTER_LIST";
export const CHANGE_APPLICANT_STATUS = "CHANGE_APPLICANT_STATUS";

export const getApplicants = (setLoader) => {
    return async (dispatch) => {
        const res = await Axios.get(
            "http://54.162.60.38/job/company/applicants/?company_id=Mg=="
        ).catch((err) => {
            throw err;
        });
        dispatch({ type: GET_APPLICANTS, payload: res.data.data });
        setLoader(false);
    };
};

export const filterList = (data) => {
    return (dispatch) => {
        dispatch({ type: FILTER_LIST, payload: data });
    };
};

export const changeApplicantStatus = (value) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_APPLICANT_STATUS, payload: value });
    };
};
