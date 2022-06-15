import {v1} from "uuid";

import {ActionsType} from "./redux-store";

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newMessage: newMessage
} as const)

export type PostsArrayType = {
    id: string
    likeCounts: number
    message: string
}
export type ProfilePageType = {
    posts: PostsArrayType[]
    newPostText: string
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
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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
        default:
            return state
    }
}

export default profileReducer