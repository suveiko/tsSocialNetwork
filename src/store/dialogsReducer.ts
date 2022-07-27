import {v1} from "uuid";

import {ActionsType} from "./store";


const initialState: DialogsPageType = {
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Where are you from?'},
        {id: v1(), message: 'Howdy'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'}
    ],
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
                    {id: v1(), message: action.newMessageBody}
                ]
            }
            return newState
        default:
            return state
    }
}


export const addMessage = (newMessageBody: string) => ({type: "ADD-MESSAGE", newMessageBody} as const)


export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
