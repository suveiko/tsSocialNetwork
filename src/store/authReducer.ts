import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

import {ActionsType, StoreType} from "./store";

import {AuthAPI} from "../api/api";


const initialState: AuthReducerDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state: AuthReducerDataType = initialState, action: ActionsType): AuthReducerDataType => {
    switch (action.type) {
        case 'SET-USERS-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET-USERS-DATA',
    data: {id, login, email, isAuth}
} as const)


export const getAuthUserData = (): AuthReducerThunkType => async dispatch => {
    const data = await AuthAPI.me()
    if (data.resultCode === 0) {
        const {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const logMe = (email: string, password: string, rememberMe: boolean): AuthReducerThunkType => async dispatch => {
    const data = await AuthAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): AuthReducerThunkType => async dispatch => {
    const data = await AuthAPI.logout()
    data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false))
}


type AuthReducerActionsTypes = | ReturnType<typeof setAuthUserData>
    | FormAction
export type AuthReducerThunkType<ReturnType = void> = ThunkAction<ReturnType
    | Promise<ReturnType>, StoreType, unknown, AuthReducerActionsTypes>
export type AuthReducerDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}