import axios from "axios";

const baseGet = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const follow = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    withCredentials: true,
    headers: {
        "API-KEY": "8fca395a-718c-4e90-b153-25faf266fc5d"
    }
})




export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return baseGet.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return baseGet.get(`/profile/${userId}`)
            .then(response => response.data);
    },

    addFollow(id) {
        return follow.post(`${id}`)
            .then(response => response.data);
    },

    deleteFollow(id) {
        return follow.delete(`${id}`)
            .then(response => response.data);
    },

    auth() {
        return baseGet.get(`auth/me`)
            .then(response => response.data);
    },


}