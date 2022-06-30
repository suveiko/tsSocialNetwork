import {ActionsType} from "./redux-store";


export type UsersArrayType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
export type LocationType = {
    country: string
    cityName: string
}
export type UsersPageType = {
    users: UsersArrayType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type PhotosType = {
    small: string
    large: string
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 35,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}


export const followAC = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UsersArrayType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
