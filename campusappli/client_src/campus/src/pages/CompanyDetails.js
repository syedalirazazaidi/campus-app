import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/comp.jpg'
class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            <nav className="nav-extended blue">
                <div className="nav-wrapper">
                    {/* <a href="#!" class="brand-logo">Logo</a> */}
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/companyform' >Post A Jobs</Link></li>
                        <li><Link to='/getstudentform'>Views Student Profile</Link></li>
                        {/* <li><Link>Sign Out</Link></li> */}
                    </ul>
                </div>
                <div className="nav-content">
                    <span class="nav-title"><strong>CAMPUS RECRUITMENT SYSTEM</strong></span>
                    {/* <a href className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i className="material-icons">student</i>
                    </a> */}
                </div>
            </nav>
            <img src={logo} height ='940' width ='1899' alt="company"/>
            </div>
        );
    }
}

export default StudentDetails;