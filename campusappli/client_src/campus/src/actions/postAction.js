import { COMPANY_FORM, STUDENT_FORM, GET_DATA, COMPANY_ID } from './type';
import { userService } from '../services/user.services'
import history from '../History'
import axios from 'axios'
export function postCompanyForm(user) {
    return dispatch => {
        userService.postCompanyForm(user)
            .then((res) => {
                if (res && !res.error) {
                    dispatch({ type: COMPANY_FORM, payload: res })
                    history.push('/getcompanyform')
                }
            })
    }
}
export function getCompanyForm() {
    return dispatch => {
        userService.getCompanyForm()
            .then((res) => {
                console.log('0-0-', res)
                if (res && !res.error) {
                    dispatch({ type: GET_DATA.GET_COMPANY_DATA, payload: res })
                }
            })
    }
}
export function applyJob(localUserId, data) {
    return dispatch => {
        userService.applyJob(localUserId, { appliedJobs: data })
            .then((res) => {
                console.log('comapny ID', res)
                if (res && !res.error) {
                    dispatch({ type: COMPANY_ID, payload: res })
                }
            })
    }
}


export function getStudentForm() {
    return dispatch => {
        userService.getStudentForm()
            .then((res) => {
              
               if (res && !res.error) {
                dispatch({ type: GET_DATA.GET_STUDENT_DATA, payload: res })
            }
        })
    }
}
// export function postStudentForm(user) {
//     console.log('---', user.file)
//     if (user.file !== '')
//         return dispatch => {
//             axios
//                 .post('http://localhost:3000/api/studentforms', {
//                     studentName: user.studentName,
//                     stuQualif: user.stuQualif,
//                     email: user.email,
//                     file: user.file.name
//                 })
//                 .then((res) => {
//                     console.log('form res:', res)
//                     if (!res.error) {
//                         const fd = new FormData();
//                         fd.append('image', user.file, user.file.name)
//                         axios.post('http://localhost:3000/api/containers/uploads/upload', fd)
//                             .then((res) => {
//                                 console.log('file upload res...........:', res)
//                                 //  history.push('/companyalldata')
//                             })
//                         dispatch({
//                             type: STUDENT_FORM,
//                             payload: res
//                         })
//                         history.push('/getstudentform')
//                     }
//                 }
//                 )
//         }
// }
export function postStudentForm(user) {
        let sentUser ={
            studentName: user.studentName,
            stuQualif: user.stuQualif,
            email: user.email,
            file:user.file.name
        }
    console.log('sent user:', sentUser)
        if (user.file !== '')
            return dispatch => {
            //    userService.postStudentForm(sentUser)
            axios.post('http://localhost:3000/api/studentforms', sentUser)
                    .then((res) => {
                        console.log('post student res:', res)
                        if (!res.error) {
                            const fd = new FormData();
                            fd.append('image', user.file, user.file.name)
                            axios.post('http://localhost:3000/api/containers/uploads/upload', fd)
                            .then((res)=>console.log('upload res:', res))
                            console.log('fileppppppppppp:',  fd) 
                            // userService.uploadImg(fd)
                            //     .then((res) => {
                            //         console.log('99999999999999...........:', res)
                            //     })
                            dispatch({
                                type: STUDENT_FORM,
                                payload: res
                            })
                            history.push('/getstudentform')
                        }
                    }
                    )
            }
    }