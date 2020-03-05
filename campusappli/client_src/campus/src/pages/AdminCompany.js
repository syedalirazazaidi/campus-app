import React, { Component } from 'react'
import axios from 'axios'
import {getCompanyForm,applyJob} from '../actions/postAction'
import Header from './Header';
class  GetAdminCompany extends Component {
    state={
        dataStu : [],
        jobApply : [],
      
    }
    componentDidMount() {
       this.companyData()
     }
     companyData() {
         console.log('hi')
         axios.get('http://localhost:3000/api/companyforms')
           .then(response => {
             console.log(response.data)
             this.setState({ dataStu: response.data, isLoading: false },
               console.log('DDDDDDDDDDDDDDDDDDDDDDd', this.state.data));
           })
           .catch(function (error) {
             console.log("errrrrrr",error);
           })
       }
       delete(id) {
         console.log("id here", id)
         axios.delete(`http://localhost:3000/api/companyforms/${id}`)
           .then((res) => {
             console.log('the job detail has been deleted:', res.data);
             this.companyData()
           })
           .catch(err => console.log('you have a error:', err))
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
                            <td><b>DELETE</b></td>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.dataStu.map((obj)=>
                       (
                           
                         <tr key={obj.id}>
                            <td>{obj.companyName}</td>
                            <td>{obj.jobDescr}</td>
                            <td>{obj.cgpa}</td>
                            <td>
                            <td><button onClick={() => this.delete(obj.id)}>delete</button></td>
                          </td>
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


   export default  GetAdminCompany