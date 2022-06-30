import {v1} from "uuid";

import {ActionsType} from "./redux-store";


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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newState = {
                ...state, messages: [
                    ...state.messages,
                    {id: v1(), message: state.newMessageTextValue}
                ]
            }
            newState.newMessageTextValue = ''
            return newState
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageTextValue: action.newMessage}
        default:
            return state
    }
}


export const addMessage = () => ({type: "ADD-MESSAGE"} as const)
export const updateNewMessageText = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const)

