export type PostsArrayType = {
    id: number
    likeCounts: number
    message: string
}
export type MessagesArrayType = {
    id: number
    message: string
}
export type DialogsArrayType = {
    id: number
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
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newMessage: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}
export const updateNewPostTextActionCreator = (newMessage: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newMessage: newMessage
    }
}
export const addMessageActionCreator = (): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE"
    }
}
export const updateNewMessageTextActionCreator = (newMessage: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    }
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCounts: 10, message: 'Hello, Im Sasha'},
                {id: 2, likeCounts: 2, message: 'Go away'},
                {id: 3, likeCounts: 44, message: 'I like you'},
                {id: 4, likeCounts: 2, message: 'What happend?'},
                {id: 5, likeCounts: 130, message: 'NOOO'},
                {id: 6, likeCounts: 10232, message: 'YE'}
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Where are you from?'},
                {id: 4, message: 'Howdy'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageTextValue: '',
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sergey'},
                {id: 5, name: 'Jack'},
                {id: 6, name: 'Mike'}
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
                id: new Date().getTime(), likeCounts: 1022, message: this._state.profilePage.newPostText
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
                id: new Date().getTime(), message: this._state.messagesPage.newMessageTextValue
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


