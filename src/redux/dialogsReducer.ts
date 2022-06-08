import {v1} from "uuid";

import {ActionsType} from "./redux-store";

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)
export const updateNewMessageTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const)

export type MessagesArrayType = {
    id: string
    message: string
}
export type DialogsArrayType = {
    id: string
    name: string
}
export type DialogsPageType = {
    messages: MessagesArrayType[]
    newMessageTextValue: string
    dialogs: DialogsArrayType[]
}

const initialState: DialogsPageType = {
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Where are you from?'},
        {id: v1(), message: 'Howdy'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'}
    ],
    newMessageTextValue: '',
    dialogs: [
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Jack'},
        {id: v1(), name: 'Mike'}
    ]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
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