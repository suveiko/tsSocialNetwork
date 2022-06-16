import {UsersArrayType} from "../../redux/usersReducer";


type UsersType = {
    users: UsersArrayType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

export const Users = ({users, follow, unFollow, setUsers}: UsersType) => {
    return (
        <div>{users.map((u,i) => <div key={i}>{u.name}</div>)}</div>
    )
}
