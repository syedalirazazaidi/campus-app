import axios from 'axios'
export const register = newUser => {
  console.log('funciton console::', newUser)
  return axios
    .post('http://localhost:3000/api/studentcampusapps', newUser)
    .then((response) => {
      console.log('res::', response)
      console.log('Registered')
      return response
    })
}