import {v1} from "uuid";
import {ActionsType, PostsArrayType, StateType} from "./state";

const profileReducer = ({profilePage}: StateType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsArrayType = {
                id: v1(), likeCounts: new Date().getSeconds(), message: profilePage.newPostText
            }
            profilePage.posts.unshift(newPost)
            profilePage.newPostText = ''
            return profilePage
        case "UPDATE-NEW-POST-TEXT":
            profilePage.newPostText = action.newMessage
            return profilePage
        default:
            return profilePage
    }
}

export default profileReducer