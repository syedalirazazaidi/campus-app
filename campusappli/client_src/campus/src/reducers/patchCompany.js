import { COMPANY_ID } from '../actions/type';
const INITIAL_STATE = {
    studentNames: []
};
function PatchCompany(state = INITIAL_STATE, action) {
    console.log('action', action)
    switch (action.type) {
        case COMPANY_ID:
            return { ...state, studentNames: action.payload }
        default:
            return state;
    }
}
export default PatchCompany