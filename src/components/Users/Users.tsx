import React from "react";
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


class Users extends React.Component<UsersType> {

    componentDidMount() {
        this.props.users.length === 0 && axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small !== null ? u.photos.small : avatar}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button
                                    className={s.btnStyle}
                                    onClick={() => this.props.unFollow(u.id)}
                                >
                                    Unfollow
                                </button>
                                : <button
                                    className={s.btnStyle}
                                    onClick={() => this.props.follow(u.id)}
                                >
                                    Follow
                                </button>
                        }
                    </div>
                </span>
                            <span>
                    <span>
                        {this.props.children}
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
            </div>
        )
    }
}

export default Users;