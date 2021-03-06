import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true
});

export const usersApi = {
    getUsers(currentPage, pageSize) {

        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
        // TODO из за fake api багается. Поможет переход на живой сервер
        // .then(response=> {
        // return response.data
    },
    getAuth() {

        return instance.get(`auth/`).then(response => {
            return response.data
        })
    },
    getFollow(id) {

        return instance.post(`follow/`+id).then(response => {
            return response.data
        })
    },
    getUnFollow(id) {

        return instance.delete(`follow/` + id).then(response => {
            return response.data
        })
    },

    getProfile(id) {
        return profileApi.getProfile(id)
    }
};
export const profileApi = {
    getProfile(id) {

        return instance.get(`profile/` + id)
    },


    getStatus(id) {

        return instance.get(`status/` + id)
    },

    updateStatus(status) {
        // TODO id захардкожен так как ругается json-server =(
        return instance.put(`status/2`, {status})
    }
};