import axios from "axios";

import {UsersArrayType} from "../../redux/usersReducer";

import avatar from '../../assets/user-icon.png'
import s from './Users.module.css'


type UsersType = {
    users: UsersArrayType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

export const Users = ({users, follow, unFollow, setUsers}: UsersType) => {

    users.length === 0 &&
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => setUsers(response.data.items))

    return (
        <span>
            {
                users.map((u, i) => <div key={i}>
                <span>
                    <div>
                        <img
                            src={avatar}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button className={s.btnStyle} onClick={() => unFollow(u.id)}>Unfollow</button>
                                : <button className={s.btnStyle} onClick={() => follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.cityName"}</div>
                            </span>
                </span>
                    </div>
                )}
        </span>
    )
}
