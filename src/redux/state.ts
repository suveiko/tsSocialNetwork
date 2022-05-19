import {renderTree} from "../render";

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
    },
    messagesPage: {
        messages: MessagesArrayType[]
        dialogs: DialogsArrayType[]
    },
    sidebar: {}
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, likeCounts: 10, message: 'Hello, Im Sasha'},
            {id: 2, likeCounts: 2, message: 'Go away'},
            {id: 3, likeCounts: 44, message: 'I like you'},
            {id: 4, likeCounts: 2, message: 'What happend?'},
            {id: 5, likeCounts: 130, message: 'NOOO'},
            {id: 6, likeCounts: 10232, message: 'YE'}
        ]
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
}

export const addPost = (newMessage: string) => {
    let newPost: PostsArrayType = {
        id: new Date().getTime(), likeCounts: 1022, message: newMessage
    }
    state.profilePage.posts.push(newPost)

    renderTree(state)
}