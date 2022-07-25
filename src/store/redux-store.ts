import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import thunk from "redux-thunk"

import {addPost, profileReducer, setStatus, setUserProfile, updateNewPostText,} from "./profileReducer";
import {addMessage, dialogsReducer} from "./dialogsReducer";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleFollowingProgress,
    toggleIsFetching, unFollow,
    usersReducer
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";


export type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>
export type ActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore for dev
window.store = store
