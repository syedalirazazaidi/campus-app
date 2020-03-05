import { service } from './apiservice'
export const userService = {
    signup: function (data) {
        return service.invoke("POST", "/api/studentcampusapps", data)
    },
    login: function (data) {
        return service.invoke("POST", "/api/studentcampusapps/login", data)
    },
    getUserById: function (id) {
        return service.invoke("GET", "/api/studentcampusapps/" + id);
    },
    postCompanyForm: function (data) {
        return service.invoke("POST", "/api/companyforms", data)
    },
    postStudentForm: function (data) {
        return service.invoke("POST", "/api/studentforms", data)
    },
    getStudentForm: function () {
        return service.invoke("GET", "/api/studentforms")
    },
    getCompanyForm: function () {
        return service.invoke("GET", "/api/companyforms")
    },
    applyJob: function (userId, data) {
        return service.invoke("PATCH", "/api/studentcampusapps/" + userId, data);
    },
    logout: function (data) {
        return service.invoke("POST", "/api/studentcampusapps/login", data)
    },
    uploadImg: function (data) {
        return service.invoke("POST", "/api/containers/uploads/upload", data)
    }
    
    


}
