import {v1} from "uuid";
import {ActionsType, PostsArrayType, StateType} from "./state";

export const profileReducer = ({profilePage}: StateType, action: ActionsType) => {
    if (action.type === 'ADD-POST') {
        const newPost: PostsArrayType = {
            id: v1(), likeCounts: new Date().getSeconds(), message: profilePage.newPostText
        }
        profilePage.posts.unshift(newPost)
        profilePage.newPostText = ''

    }
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
        profilePage.newPostText = action.newMessage
    }
    return profilePage
}