import {NavLink} from "react-router-dom";

import {UsersType} from "./UsersContainer";

import avatar from '../../assets/user-icon.png'
import s from './Users.module.css'
import axios from "axios";


type UsersPropsType = {
    onPageChanged: (page: number) => void
} & UsersType


const Users = ({
                   totalUsersCount, pageSize,
                   onPageChanged, currentPage,
                   users, unFollow, follow,
               }: UsersPropsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => (
                        <span
                            key={`${currentPage}-${p}`}
                            onClick={() => onPageChanged(p)}
                            className={currentPage === p ? s.selectedPage : s.page}
                        >{p}
                        </span>
                    ))
                }
            </div>
            {
                users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img
                            src={u.photos.small !== null ? u.photos.small : avatar}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed
                            ? <button
                                className={s.btnStyle}
                                onClick={() => {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d109b0c8-ad95-4d03-855f-a4cafa3fa08d"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                unFollow(u.id)
                                            }
                                        })
                                }}
                            >
                                Unfollow
                            </button>
                            : <button
                                className={s.btnStyle}
                                onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "d109b0c8-ad95-4d03-855f-a4cafa3fa08d"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                follow(u.id)
                                            }
                                        })
                                }}
                            >
                                Follow
                            </button>
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
        </div>
    );
};

export default Users;