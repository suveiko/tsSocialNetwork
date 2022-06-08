import {v1} from "uuid";

import {ActionsType, DialogsPageType, MessagesArrayType} from "./state";

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)
export const updateNewMessageTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const)

const dialogsReducer = (state : DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesArrayType = {
                id: v1(), message: state.newMessageTextValue
            }
            state.messages.push(newMessage)
            state.newMessageTextValue = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageTextValue = action.newMessage
            return state
        default:
            return state
    }
}

export default dialogsReducer