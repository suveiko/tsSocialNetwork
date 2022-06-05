import {v1} from "uuid";

import {ActionsType, MessagesArrayType, StateType} from "./state";

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)
export const updateNewMessageTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const)

const dialogsReducer = ({messagesPage}: StateType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesArrayType = {
                id: v1(), message: messagesPage.newMessageTextValue
            }
            messagesPage.messages.push(newMessage)
            messagesPage.newMessageTextValue = ''
            return messagesPage
        case "UPDATE-NEW-MESSAGE-TEXT":
            messagesPage.newMessageTextValue = action.newMessage
            return messagesPage
        default:
            return messagesPage
    }
}

export default dialogsReducer