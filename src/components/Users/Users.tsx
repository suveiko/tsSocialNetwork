import {UsersArrayType} from "../../redux/usersReducer";

import s from './Users.module.css'

type UsersType = {
    users: UsersArrayType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

export const Users = ({users, follow, unFollow, setUsers}: UsersType) => {
    return (
        <span>
            {users.map((u, i) => <div key={i}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.description}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.cityName}</div>
                    </span>
                </span>
            </div>)}
        </span>
    )
}
