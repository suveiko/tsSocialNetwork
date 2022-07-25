import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";

import {AuthAPI} from "../api/api";


export type AuthReducerDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}
const initialState: AuthReducerDataType = {
    id: 0,
    login: '',
    email: '',
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

export const setAuthUserData = ({id, login, email, isAuth}: AuthReducerDataType) => ({
    type: 'SET-USERS-DATA',
    data: {id, login, email, isAuth}
} as const)


export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthAPI.me().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData({id, login, email, isAuth: true}))
        }
    })
}
export const logMe = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    AuthAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: Dispatch) => {
    AuthAPI.logout().then(data => {
        if (data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUserData(null, null, null, false))
        }
    })
}

