import {AuthReducerThunkType, getAuthUserData} from "../authReducer/authReducer";


const initialState: AppReducerType = {
    initialized: false
}


export const appReducer = (state: AppReducerType = initialState, action: ActionType): AppReducerType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)


export const initializeApp = (): AuthReducerThunkType => async dispatch => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}


type AppReducerType = { initialized: boolean }
type ActionType = ReturnType<typeof initializedSuccess>