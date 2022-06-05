import {v1} from "uuid";

export type PostsArrayType = {
    id: string
    likeCounts: number
    message: string
}
export type MessagesArrayType = {
    id: string
    message: string
}
export type DialogsArrayType = {
    id: string
    name: string
}
export type StateType = {
    profilePage: {
        posts: PostsArrayType[]
        newPostText: string
    },
    messagesPage: {
        messages: MessagesArrayType[]
        newMessageTextValue: string
        dialogs: DialogsArrayType[]
    },
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

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newMessage: newMessage
} as const)
export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)
export const updateNewMessageTextActionCreator = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newMessage
} as const)

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
        messagesPage: {
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
        if (action.type === 'ADD-POST') {
            const newPost: PostsArrayType = {
                id: v1(), likeCounts: new Date().getSeconds(), message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''

            this._callSubscriber()
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newMessage

            this._callSubscriber()
        }
        if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessagesArrayType = {
                id: v1(), message: this._state.messagesPage.newMessageTextValue
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageTextValue = ''

            this._callSubscriber()
        }
        if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageTextValue = action.newMessage

            this._callSubscriber()
        }
    }
}


