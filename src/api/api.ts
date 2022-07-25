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
        .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data),
    unFollowFromUser: (id: number) => instance
        .delete<ResponseType>(`follow/${id}`)
        .then(res => res.data),
    followOnUser: (id: number) => instance
        .post<ResponseType>(`follow/${id}`, {})
        .then(res => res.data),
}

export const ProfileAPI = {
    getProfileOfUser: (userId: number) => instance
        .get<GetProfileType>(`profile/${userId}`)
        .then(res => res.data),
    getStatus: (userId: number) => instance
        .get<GetStatusType>(`profile/status/${userId}`)
        .then(res => res.data),
    updateStatus: (status: string) => instance
        .put<UpdateStatusType>(`profile/status`, {status})
        .then(res => res.data)
}

export const AuthAPI = {
    me: () => instance
        .get<ResponseType<GetAuthMeType>>(`auth/me`)
        .then(res => res.data),
    login: (email: string, password: string, rememberMe: boolean = false) => instance
        .post(`auth/login`, {email, password, rememberMe})
        .then(res => res.data),
    logout: () => instance
        .delete(`auth/login`)
        .then(res => res.data)
}


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    uniqueUrlName?: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
export type GetUsersType = {
    items: UserType[]
    totalCount: number
    followed: boolean
}
export type GetProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type GetAuthMeType = {
    id: number
    email: string
    login: string
}
export type GetStatusType = string
export type UpdateStatusType = {
    resultCode: number
    messages: string[],
    data: object
}
