import { GET_APPLICANTS, FILTER_LIST, CHANGE_APPLICANT_STATUS } from "./action";

const initialState = {
    applicants: {},
    filteredApplicantsList: [],
    applicantStatus: "Applied",
};

const ApplicantsData = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICANTS:
            return { ...state, applicants: action.payload };
        case FILTER_LIST:
            return { ...state, filteredApplicantsList: action.payload };
        case CHANGE_APPLICANT_STATUS:
            return { ...state, applicantStatus: action.payload };
        default:
            return state;
    }
};

export default ApplicantsData;
