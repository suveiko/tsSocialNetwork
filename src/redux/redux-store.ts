import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import dialogsReducer, {addMessageActionCreator, updateNewMessageTextActionCreator} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {followAC, unFollowAC} from "./usersReducer";

export type ReducersType = typeof reducers

export type StoreType = ReturnType<ReducersType>

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)