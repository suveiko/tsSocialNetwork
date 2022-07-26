import {v1} from "uuid";

import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";

import {GetProfileType, PostType, ProfileAPI} from "../api/api";


export type ProfilePageType = {
    posts: PostType[]
    profile: GetProfileType
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), likes: 10, message: 'Hello, Im Sasha'},
        {id: v1(), likes: 2, message: 'Go away'},
        {id: v1(), likes: 44, message: 'I like you'},
        {id: v1(), likes: 2, message: 'What happening?'},
        {id: v1(), likes: 130, message: 'No'},
        {id: v1(), likes: 10232, message: 'YE'}
    ],
    profile: {
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [
                    {id: v1(), likes: new Date().getSeconds(), message: action.message},
                    ...state.posts,
                ],
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}


export const addPost = (message: string) => ({type: "ADD-POST", message} as const)
export const setUserProfile = (profile: GetProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)


export const getProfileOfUser = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getProfileOfUser(userId)
        .then(data => dispatch(setUserProfile(data)))
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(data => dispatch(setStatus(data)))
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => data.resultCode === 0 && dispatch(setStatus(status)))
}

