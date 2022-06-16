import {ActionsType} from "./redux-store";


export type UsersArrayType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    description: string
    location: LocationType
}
export type LocationType = {
    country: string
    cityName: string
}
export type UsersPageType = {
    users: UsersArrayType[]
}

const initialState: UsersPageType = {
    users: [],
}

const dialogsReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users
                    .map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        default:
            return state
    }
}


export const followAC = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UsersArrayType[]) => ({type: 'SET-USERS', users} as const)

export default dialogsReducer