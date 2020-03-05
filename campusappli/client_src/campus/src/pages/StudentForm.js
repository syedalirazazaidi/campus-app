import React, { Component } from 'react'
// import{ postStudentForm} from '../auth/index'
import {postStudentForm} from '../actions/postAction'
import {connect} from 'react-redux'
class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            stuQualif: '',
            email: '',
            selectedFile:'' ,
        };
    }
    handleChange = (e) => {
        this.setState({studentName:e.target.value})
    }
    handleChange_comp = (e) => {
        this.setState({stuQualif:e.target.value})
    }
    handleChange_ema = (e) => {
        this.setState({email:e.target.value})
    }
   fileselectedHandler=(e)=>{
     console.log('file',e.target.files)
     this.setState({selectedFile:e.target.files[0]})
   }

    _handleSubmit = (evt) => {
        console.log('studetn complete  detail',evt.target.value);
        evt.preventDefault();
        const userData = {
             studentName: this.state.studentName,
             stuQualif: this.state.stuQualif,
             email: this.state.email,
             file:this.state.selectedFile
        }
        if (userData.studentName !== '' && userData.stuQualif !== '' && userData.email !== '' && userData.file !=='') {
            this.props.studentSubmit(userData)
        } else alert('Please fill all fields!')
      }

    render() {
      console.log('studetn complete  detail',this.state.value);
        return (
            <div>
                <nav className='blue darken'>
                    <div className="nav-wrapper">
                        <a href className="brand-logo center">STUDENT RECRUITMENT </a>
                    </div>
                </nav>
                <div className="container">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Student Details!!</span>
                                <hr />
                            </div>
                            <form onSubmit={this._handleSubmit}>
                                <div className="input-field col s12">
                                    <input id="first_name" type="text" name='title' value={this.state.studentName} onChange={this.handleChange} class="validate" />
                                    <label for="first_name">Student Name</label><br />
                                </div>
                                <div className="input-field col s12">
                                    <input id="last_name" type="text" value={this.state.stuQualif} onChange={this.handleChange_comp} class="validate" />

                                    <label for="last_name">Qualification</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="email" type="email" value={this.state.email} onChange={this.handleChange_ema}  class="validate" />
                                    <label for="email">Student Email</label>
                                </div>
                                <div class="file-field input-field" >
                                <div class="btn">
                             <span >File</span>
                                  <input type="file"onChange={this.fileselectedHandler}  />
                             </div>
                          <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder='Upload your CV must be .txt extension' />
                           </div>
                            </div>
                                <button  className="btn waves-effect waves-light" type="submit" name="action">Submit
                       </button>
                            </form>
                        </div>

                    </div>

                </div>

            </div>

        );
        }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
     studentSubmit :(userData)=> {dispatch(postStudentForm(userData))}
  
  }
}
function mapStateToProps(state) {
  return {
   
  }
}

// component will receive: props.a, props.todos, and props.filter

// export default StudentForm;
export default connect(mapStateToProps,mapDispatchToProps)(StudentForm)