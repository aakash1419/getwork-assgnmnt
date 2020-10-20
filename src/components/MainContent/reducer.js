import { GET_APPLICANTS, FILTER_LIST } from "./action";

const initialState = { applicants: {}, filteredApplicantsList: [] };

const ApplicantsData = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICANTS:
            return { ...state, applicants: action.payload };
        case FILTER_LIST:
            return { ...state, filteredApplicantsList: action.payload };
        default:
            return state;
    }
};

export default ApplicantsData;
