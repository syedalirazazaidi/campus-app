import { GET_DATA } from '../actions/type';
const INITIAL_STATE = {
    getCompanyForm: [],
    getStudentForm: []
};
function Get_Student_Company(state = INITIAL_STATE, action) {
    console.log('1111111111111', action.payload)
    switch (action.type) {
        case GET_DATA.GET_COMPANY_DATA:
            return { ...state, getCompanyForm: action.payload }
        case GET_DATA.GET_STUDENT_DATA:
            return { ...state, getStudentForm: action.payload }
        default:
            return state;
    }

}
export default Get_Student_Company