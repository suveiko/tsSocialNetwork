import {ActionsType} from "./redux-store";


export type AuthReducerDataType = {
    id: number
    login: string
    email: string
    isAuth?: boolean
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
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = ({id, login, email}: AuthReducerDataType) => ({
    type: 'SET-USERS-DATA',
    data: {id, login, email}
} as const)