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
    addFollow(id){
        return connection.post(`follow/${id}`, {})
        .then(info=>info.data)
    },   
    deleteFollow(id){
        return connection.delete(`follow/${id}`)
        .then(info=>info.data)
    }, 
}