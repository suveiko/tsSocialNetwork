import {combineReducers, createStore} from "redux";

import {addPost, profileReducer, setUserProfile, updateNewPostText,} from "./profileReducer";
import {addMessage, dialogsReducer, updateNewMessageText} from "./dialogsReducer";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleIsFetching, unFollow,
    usersReducer
} from "./usersReducer";
import {sidebarReducer} from "./sidebarReducer";
import {authReducer, setAuthUserData} from "./authReducer";


export type ReducersType = typeof reducers

export type StoreType = ReturnType<ReducersType>

export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

export const store = createStore(reducers)
