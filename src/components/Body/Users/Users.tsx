import {NavLink} from "react-router-dom";

import {UsersType} from "./UsersContainer";

import avatar from '../../../assets/user-icon.png'
import s from './Users.module.css'


type UsersPropsType = {
    onPageChanged: (page: number) => void
} & UsersType


const Users = ({
                   totalUsersCount, pageSize,
                   onPageChanged, currentPage,
                   users, followOnUser,
                   followingInProgress,
                   unFollowFromUser,
               }: UsersPropsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    const onClickUnFollowFromUser = (id: number) => unFollowFromUser(id)
    const onClickFollowOnUser = (id: number) => followOnUser(id)

    return (
        <div className={s.container}>
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
            <div>
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
                                disabled={followingInProgress.some(id => id === u.id)}
                            >
                                Unfollow
                            </button>
                            : <button
                                className={s.btnStyle}
                                onClick={() => onClickFollowOnUser(u.id)}
                                disabled={followingInProgress.some(id => id === u.id)}
                            >
                                Follow
                            </button>
                    }
                </div>
            </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Users;