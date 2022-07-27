import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import thunk, {ThunkAction} from "redux-thunk"

import {addPost, profileReducer, setStatus, setUserProfile,} from "./profileReducer";
import {addMessage, dialogsReducer} from "./dialogsReducer";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleFollowingProgress,
    toggleIsFetching, unFollow,
    usersReducer
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))


export type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, ActionsType>
export type ActionsType =
    | ReturnType<typeof addPost>
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


// @ts-ignore for dev
window.store = store
