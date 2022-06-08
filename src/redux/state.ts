import {v1} from "uuid";

import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type PostsArrayType = {
    id: string
    likeCounts: number
    message: string
}
export type ProfilePageType = {
    posts: PostsArrayType[]
    newPostText: string
}
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
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), likeCounts: 10, message: 'Hello, Im Sasha'},
                {id: v1(), likeCounts: 2, message: 'Go away'},
                {id: v1(), likeCounts: 44, message: 'I like you'},
                {id: v1(), likeCounts: 2, message: 'What happening?'},
                {id: v1(), likeCounts: 130, message: 'No'},
                {id: v1(), likeCounts: 10232, message: 'YE'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state, action)
        this._callSubscriber()
    }
}


