import { COMPANY_FORM } from '../actions/type';
const INITIAL_STATE = {
    companyNames: []
};
function CompanyReducer(state = INITIAL_STATE, action) {
    console.log('action', action)
    switch (action.type) {
        case COMPANY_FORM:
            return { ...state, companyNames: action.payload }
        default:
            return state;
    }
}
export default CompanyReducer