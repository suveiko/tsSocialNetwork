import {v1} from "uuid";
import {ActionsType, MessagesArrayType, StateType} from "./state";

export const dialogsReducer = ({messagesPage}: StateType, action: ActionsType) => {
    if (action.type === 'ADD-MESSAGE') {
        const newMessage: MessagesArrayType = {
            id: v1(), message: messagesPage.newMessageTextValue
        }
        messagesPage.messages.push(newMessage)
        messagesPage.newMessageTextValue = ''
    }
    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        messagesPage.newMessageTextValue = action.newMessage
    }
    return messagesPage
}