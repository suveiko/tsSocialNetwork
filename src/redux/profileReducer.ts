import {v1} from "uuid";

import {ActionsType, PostsArrayType, ProfilePageType} from "./state";

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newMessage: newMessage
} as const)


const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsArrayType = {
                id: v1(), likeCounts: new Date().getSeconds(), message: state.newPostText
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newMessage
            return state
        default:
            return state
    }
}

export default profileReducer