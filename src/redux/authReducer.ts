import {ActionsType} from "./redux-store";


export type AuthReducerDataType = {
    id: number
    login: string
    email: string
}
const initialState: AuthReducerDataType = {
    id: 0,
    login: '',
    email: ''
}


export const authReducer = (state: AuthReducerDataType = initialState, action: ActionsType): AuthReducerDataType => {
    switch (action.type) {
        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthReducerDataType) => ({type: 'SET-USERS-DATA', data} as const)