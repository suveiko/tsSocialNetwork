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
    addPost: () => void
    updateNewPostText: (newMessage: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
    subscriber: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
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
    addPost() {
        let newPost: PostsArrayType = {
            id: new Date().getTime(), likeCounts: 1022, message: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''

        this._callSubscriber()
    },
    updateNewPostText(newMessage: string) {
        this._state.profilePage.newPostText = newMessage

        this._callSubscriber()
    },
    addMessage() {
        let newMessage: MessagesArrayType = {
            id: new Date().getTime(), message: this._state.messagesPage.newMessageTextValue
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessageTextValue = ''

        this._callSubscriber()
    },
    updateNewMessageText(newMessage: string) {
        this._state.messagesPage.newMessageTextValue = newMessage

        this._callSubscriber()
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    }
}


