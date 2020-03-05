import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/uni.jpg'
import history from '../History'
import Button from '@material-ui/core/Button';
class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _signOutAsync=()=>
      {
          localStorage.removeItem('users');
          history.push('/')
    }
    render() {
        return (
         
            <div>
            <nav className="nav-extended blue">
                <div className="nav-wrapper">
                    {/* <a href="#!" class="brand-logo">Logo</a> */}
                    <ul className="right hide-on-med-and-down">
                        <li style={{color: 'red'}}><Link to='/studentform'  >Add Profile</Link></li>
                       
                        {/* <li><Link>View Profile</Link></li> */}
                        {/* <li><Link>Sign Out</Link></li> */}
                        <Button color="secondary" onClick={()=>this._signOutAsync()}>Log Out</Button>
                    </ul>
                </div>
                <div className="nav-content">
                    <span class="nav-title"><strong>CAMPUS RECRUITMENT SYSTEM</strong></span>
                    <Link to ='/getcompanyform'className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i className="material-icons">JOBS</i>
                    </Link>
                   
                </div>
            </nav>
            
            <img src={logo} height ='940' width ='1899' alt="university"/>
            </div>
        );
    }
}

export default StudentDetails;