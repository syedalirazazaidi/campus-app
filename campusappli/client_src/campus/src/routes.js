import React, { Component } from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import history from "./History"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StudentDetails from './pages/StudentDetails';
import CompanyDetails from './pages/CompanyDetails';
import StudentForm from './pages/StudentForm';
import CompanyForm from './pages/CompanyForm';
import GetCompanyForm from './pages/getCompanyform'
import GetStudentForm from './pages/getStudentForm'
import AdminPanel from './pages/AdminPanel';
import GetAdminStudent from './pages/AdminStudent'
import GetAdminCompany from './pages/AdminCompany'
class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Router history={history}>
                        <Route exact path="/" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/studentform" component={StudentForm}/>
                        <Route path='/companyform' component={CompanyForm}/>
                        <Route path='/studentdetail' component={StudentDetails} />
                        <Route path='/companydetail' component={CompanyDetails} />
                        <Route path='/getcompanyform' component={GetCompanyForm} />
                        <Route path='/getstudentform' component={GetStudentForm} />
                        <Route path='/admin' component={AdminPanel} />
                        <Route path='/adminstudent' component={GetAdminStudent} />
                        <Route path='/admincompany' component={ GetAdminCompany} />
                    </Router>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;