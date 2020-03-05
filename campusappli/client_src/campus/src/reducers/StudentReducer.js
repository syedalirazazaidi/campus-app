import { STUDENT_FORM } from '../actions/type';
const INITIAL_STATE = {
    studentNames: []
};
function StudentReducer(state = INITIAL_STATE, action) {
    console.log('actionrrr44', action)
    switch (action.type) {
        case STUDENT_FORM:
            return { ...state, studentNames: action.payload }
        default:
            return state;
    }
}
export default StudentReducer