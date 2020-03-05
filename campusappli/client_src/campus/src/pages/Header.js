import React, { Component } from 'react'


import Button from '@material-ui/core/Button';
import axios from 'axios'
// import {Link} from 'react-router-dom'
import history from '../History'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    // _signOutAsync() {
    //  axios.post('http://localhost:3000/api/studentcampusapps/logout')
    //  .then(res=>{
    //      console.log('successfully deleted',res)
    //      history.push('/')
    //  })
    // };
    _signOutAsync = async () => {
    //    let localUser = localStorage.getItem('users')
    //     localUser = JSON.parse(localUser)
    //     console.log(localUser)
        // let userToken = localUser.token
    //     let userToken = "qhsh2RGGLTcrqMVx4agOQKb1Sv69CGCchnGmnLqiDdIlhy6s840ZdkqFoJQMHH1a"
    //    console.log(userToken)
        // try {
        //   return await axios.post('http://localhost:3000/api/studentcampusapps/logout?access_token='+userToken,{
        //     headers: {
        //       Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
        //     }
        //    })
        // } catch (error) {
        //   console.error(error)
        // }
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
                   
                    <ul className="right hide-on-med-and-down">
                        {/* <li><Link to='/' >Log Out</Link></li> */}
                        {/* <button onPress={() => this._signOutAsync()}>Log Out</button> */}
                        <Button color="secondary" onClick={()=>this._signOutAsync()}>Log Out</Button>
                    </ul>
                </div>
               
            </nav>

            </div>
        );
    }
}

export default Header;