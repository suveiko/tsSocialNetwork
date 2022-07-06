import {NavLink} from "react-router-dom";

import {UsersType} from "./UsersContainer";

import avatar from '../../assets/user-icon.png'
import s from './Users.module.css'

import {usersAPI} from "../../api/api";


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

    const onClickUnFollowFromUser = (id: string) => {
        usersAPI.unFollowFromUser(id).then(data => data.resultCode === 0 && unFollow(id))
    }
    const onClickFollowOnUser = (id: string) => {
        usersAPI.followOnUser(id).then(data => data.resultCode === 0 && follow(id))
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
                                onClick={() => onClickUnFollowFromUser(u.id)}
                            >
                                Unfollow
                            </button>
                            : <button
                                className={s.btnStyle}
                                onClick={() => onClickFollowOnUser(u.id)}
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