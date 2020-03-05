import React, { Component } from 'react'
import { getStudentForm } from '../actions/postAction'
import axios from 'axios';
import Header from './Header';


class GetAdminStudent extends Component {
    state = {
        dataStu: [],
        getadmn: {}
    }
    componentDidMount() {
       this.studentData()
       
    }
    studentData() {
        console.log('hi')
        axios.get('http://localhost:3000/api/studentforms')
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
        axios.delete(`http://localhost:3000/api/studentforms/${id}`)
          .then((res) => {
            console.log('the job detail has been deleted:', res.data);
            this.studentData()
          })
          .catch(err => console.log('you have a error:', err))
      }
   

    render() {
        console.log('asdsaaaaaaaaa', this.state.getadmn)
        return (
            <div>

                <Header />

                <h1 style={{ color: 'blue', textAlign: "center", border: 'blue' }}>Student Details</h1><hr />
                {

                    <table>
                        <thead>
                            <tr>
                                <td><b>STUDENT NAME</b></td>
                                <td><b>QUALIFICATION</b></td>
                                <td><b>E-Mail</b></td>
                                <td><b>Delete</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.dataStu.map((obj,i) =>

                                <tr key={i}>
                                    <td>{obj.studentName}</td>
                                    <td>{obj.stuQualif}</td>
                                    <td>{obj.email}</td>
                                    <td><button onClick={() => this.delete(obj.id)}>delete</button></td>

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


export default GetAdminStudent