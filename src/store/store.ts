import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk"

import {addPost, profileReducer, setStatus, setUserProfile,} from "./profileReducer/profileReducer";
import {addMessage, dialogsReducer} from "./dialogReducer/dialogsReducer";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleFollowingProgress,
    toggleIsFetching, unFollow,
    usersReducer
} from "./usersReducer/usersReducer";
import {authReducer, setAuthUserData} from "./authReducer/authReducer";
import {appReducer} from "./appReducer/appReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))


export type ReducerType = typeof rootReducer
export type StoreType = ReturnType<ReducerType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, ActionsType>
export type AppDispatch = ThunkDispatch<StoreType, unknown, ActionsType>
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
