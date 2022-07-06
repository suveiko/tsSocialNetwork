import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "d109b0c8-ad95-4d03-855f-a4cafa3fa08d"
    }
})


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data),
    getMyPage: () => instance
        .get(`auth/me`)
        .then(res => res.data),


    unFollowFromUser: (id: string) => instance
        .delete(`follow/${id}`)
        .then(res => res.data),
    followOnUser: (id: string) => instance
        .post(`follow/${id}`, {})
        .then(res => res.data),


    getProfileOfUser: (userId: string) => instance
        .get(`profile/${userId}`)
        .then(res => res.data)
}
