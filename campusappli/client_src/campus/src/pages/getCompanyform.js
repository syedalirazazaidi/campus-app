import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getCompanyForm,applyJob} from '../actions/postAction'
import Header from './Header';
// import { userService } from '../services/user.services';
class GetCompanyForm extends Component {
    state={
        dataStu : [],
        jobApply : [],
      
    }
   componentDidMount(){
       console.log('get all data',this.props.getcompanyform())
       this.props.getcompanyform()
   }
   componentWillReceiveProps(nextProps){
        console.log('------------cc', nextProps.getCompany)
        this.setState({dataStu :nextProps.getCompany})
   }
   
   getApply(obj){
       let localUser = localStorage.getItem('users')
       localUser = JSON.parse(localUser)
       console.log('obj000000000000',obj) //jobid
       console.log('local storage:',localUser)
       let companyName = obj.companyName
       let appliedJobs =[]
       let jObj ={}
    //    jObj[companyName] = obj.id
       jObj.jobId = obj.id
       console.log('5555555555',jObj.jobId)
       appliedJobs.unshift(jObj)

       this.props.applyJob(localUser,appliedJobs)

   }
   
    render() {
        return (
            <div>
                <Header/>
                <h1 style={{color:'blue',textAlign:"center" ,border:'light blue'}}>Available jobs</h1><hr/>
                <table >
                    <thead>
                        <tr>
                            <td><b>COMPANY NAME</b></td>
                            <td><b>JOB DESCRIPTION</b></td>
                            <td><b>DESIGNATION</b></td>
                            {/* <td><b>APPLY</b></td> */}
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.dataStu.map((obj)=>
                       (
                           
                         <tr key={obj.id}>
                            <td>{obj.companyName}</td>
                            <td>{obj.jobDescr}</td>
                            <td>{obj.cgpa}</td>
                            {/* <td>
                             <button onClick={()=>this.getApply(obj)} color="secondary">APPLY</button>
                          </td> */}
                        </tr> 
                       )
                    )
                } 

                    </tbody>
                </table>
            </div>
            
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getcompanyform :()=> {dispatch(getCompanyForm())},
      applyJob :(localUserId,data)=> {dispatch(applyJob(localUserId,data))}
    }
  }
function mapStateToProps(state) {
      return {
            getCompany: state.user.getCompanyForm
       }
   }

   export default connect(mapStateToProps,mapDispatchToProps)(GetCompanyForm)