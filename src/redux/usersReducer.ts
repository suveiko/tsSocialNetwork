import {ActionsType} from "./redux-store";


export type UsersArrayType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
// export type LocationType = {
//     country: string
//     cityName: string
// }
export type UsersPageType = {
    users: UsersArrayType[]
}
export type PhotosType = {
    small: string
    large: string
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