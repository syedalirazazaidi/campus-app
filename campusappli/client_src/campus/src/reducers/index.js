import { combineReducers } from 'redux';
import CompanyReducer from './CompanyReducer';
import StudentReducer from './StudentReducer';
import Get_Student_Company from './getBothData';
import PatchCompany from './patchCompany';
export const rootReducer = combineReducers({
CompanyReducer :CompanyReducer,
StudentReducer,
user : Get_Student_Company,
PatchCompany:PatchCompany
})