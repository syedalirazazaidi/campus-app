import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getStudentForm} from '../actions/postAction'
import axios from 'axios';
import Header from './Header';
// import Prevpage from './prevpage';
// import _Prevpage from './Prevpage';
class GetStudentForm extends Component {
    state={
        dataStu : [],
        getadmn:{}
    }
   componentDidMount(){
       this.props.handleSubmit()
    //    localStorage.removeItem('admin')
    //    localStorage.removeItem('admin')
     //  let getadmin=  localStorage.getItem('admin');
    //    this.setState({getadmn: getadmin})

   }
   componentWillReceiveProps(nextProps){
    
        console.log('------------cccccc', nextProps.getStudent)
        this.setState({dataStu :nextProps.getStudent})
   }
   componentWillMount(){
    //    localStorage.removeItem('admin')
    //    localStorage.getItem('admin');
    let getadmin=  localStorage.getItem('admin');
    this.setState({getadmn: getadmin})
   }  
 //}
// localStorageUpdated(){
//     if (!localStorage.getItem('localstorage-status')) {
//         this.updateState(false)
//     } 
//     else if (!this.state.status) {
//         this.updateState(true)
//     }
// }
   ondownload(file){
    axios({
        url: 'http://localhost:3000/api/containers/uploads/download/'+file,
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.txt');
        document.body.appendChild(link);
        link.click();
      });
   }

    render() {
        console.log('asdsaaaaaaaaa',this.state.getadmn)
        return (
            <div>
                
                <Header/>
             
                  <h1 style={{color:'blue',textAlign:"center" ,border:'blue'}}>Student Details</h1><hr/>
                  {
                
                  <table>
                      <thead>
                          <tr>
                              <td><b>STUDENT NAME</b></td>
                              <td><b>QUALIFICATION</b></td>
                              <td><b>E-Mail</b></td>
                              <td><b>CV</b></td>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.dataStu.map((obj)=>
                          
                           <tr key={obj}>
                              <td>{obj.studentName}</td>
                              <td>{obj.stuQualif}</td>
                              <td>{obj.email}</td>
                           
                              {/* <td> <a href ={'http://localhost:3000/api/containers/uploads/files/'+obj.file}/>download</td> */}
                              
                                 
                                  
                                    <td><button onClick={()=>this.ondownload(obj.file)}><strong>download CV</strong></button></td> 
                                    
                            
                                 
                               
                          </tr> 
                         
                      )
                  } 
  
                      </tbody>
                  </table>
             
}
               
            </div>
            
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
    handleSubmit :()=> {dispatch(getStudentForm())}
    }
  }
const mapStateToProps=(state) =>{
      return {
             getStudent: state.user.getStudentForm
       }
   }

   export default connect(mapStateToProps,mapDispatchToProps)(GetStudentForm)