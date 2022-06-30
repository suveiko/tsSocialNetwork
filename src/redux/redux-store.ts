import {combineReducers, createStore} from "redux";

import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profileReducer";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogsReducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC, usersReducer} from "./usersReducer";
import {sidebarReducer} from "./sidebarReducer";


export type ReducersType = typeof reducers

export type StoreType = ReturnType<ReducersType>

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)