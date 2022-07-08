import {v1} from "uuid";

import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


export type PostsArrayType = {
    id: string
    likeCounts: number
    message: string
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: PostsArrayType[]
    newPostText: string
    profile: ProfileUserType
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), likeCounts: 10, message: 'Hello, Im Sasha'},
        {id: v1(), likeCounts: 2, message: 'Go away'},
        {id: v1(), likeCounts: 44, message: 'I like you'},
        {id: v1(), likeCounts: 2, message: 'What happening?'},
        {id: v1(), likeCounts: 130, message: 'No'},
        {id: v1(), likeCounts: 10232, message: 'YE'}
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
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
        userId: 1,
        photos: {
            small: '',
            large: '',
        }
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [
                    {id: v1(), likeCounts: new Date().getSeconds(), message: state.newPostText},
                    ...state.posts,
                ],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newMessage}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}


export const addPost = () => ({type: "ADD-POST"} as const)
export const updateNewPostText = (newMessage: string) => ({type: "UPDATE-NEW-POST-TEXT", newMessage} as const)
export const setUserProfile = (profile: ProfileUserType) => ({type: "SET-USER-PROFILE", profile} as const)


export const getProfileOfUser = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfileOfUser(userId)
        .then(data => dispatch(setUserProfile(data)))
}

