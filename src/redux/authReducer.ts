import {ActionsType} from "./redux-store";


const initialState = {
    id: null,
    login: null,
    email: null
}


export const authReducer = (state: typeof initialState = initialState, action: ActionsType) => {
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

export const setUserData = (data: typeof initialState) => ({type: 'SET-USERS-DATA', data} as const)