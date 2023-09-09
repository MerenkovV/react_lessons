import axios from "axios"

let connection = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const apiFunctions = {
    getUsers(currentPage, pageSize) {
        return connection.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(info=>info.data)},
    getAuth() {
        return connection.get(`auth/me`)
        .then(info=>info.data)},
    getProfile(id) {
        return connection.get(`profile/${id}`)
        .then(info=>info.data)},
    getStatus(id) {
        return connection.get(`profile/status/${id}`)
        .then(info=>info)},
    addFollow(id){
        return connection.post(`follow/${id}`, {})
        .then(info=>info.data)
    },   
    deleteFollow(id){
        return connection.delete(`follow/${id}`)
        .then(info=>info.data)
    },
    putStatus(status){
        return connection.put('profile/status', {status})
        .then(info=>info.data.resultCode)
    },
    LogInProfile(email, password, rememberMe){
        return connection.post('auth/login', {
            email,
            password,
            rememberMe
        }).then(info=>info.data)
    }

}