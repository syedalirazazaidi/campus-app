import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/office.jpg'
import Button from '@material-ui/core/Button';
import history from '../History'
class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getstudent=()=>{
        history.push('/adminstudent')
    }
    getcompany=()=>{
        history.push('/admincompany')
    }
    logOut=()=>{
      
          localStorage.removeItem('admin');
          history.push('/')
        
    }
    render() {
        return (
            <div>
            <nav className="nav-extended blue">
                <div className="nav-wrapper">
                    {/* <a href="#!" class="brand-logo">Logo</a> */}
                    <ul className="right hide-on-med-and-down">
                        {/* <li><Link to='/getstudentform' >Student Details</Link></li>
                        <li><Link to='/getcompanyform'>Company Details</Link></li> */}
                        <Button onClick={this.getstudent}>Student Details</Button>
                        <Button onClick={this.getcompany}>Company Details</Button>
                        <Button onClick={this.logOut}>SIgn Out</Button>
                        
                    </ul>
                </div>
                <div className="nav-content">
                    <span class="nav-title">Campus Recruitment App</span>
                    {/* <Link to ='/getcompanyform'className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                       
                    </Link> */}
                </div>
            </nav>
             <img src={logo} height ='940' width ='1899' alt="company"/>
            
          </div>
        );
    }
}

export default AdminPanel;