import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";

import {usersAPI, UserType} from "../api/api";


export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: (number | boolean)[]
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-FOLLOWING-FETCHING':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-FOLLOWING-FETCHING',
    isFetching,
    userId
} as const)


export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}
export const onChangeUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    })
}
export const unFollowFromUser = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.unFollowFromUser(id).then(data => {
        data.resultCode === 0 && dispatch(unFollow(id))
        dispatch(toggleFollowingProgress(false, id))
    })
}
export const followOnUser = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.followOnUser(id).then(data => {
        data.resultCode === 0 && dispatch(follow(id))
        dispatch(toggleFollowingProgress(false, id))
    })
}
