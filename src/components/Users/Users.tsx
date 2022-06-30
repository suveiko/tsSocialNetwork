import avatar from '../../assets/user-icon.png'
import s from './Users.module.css'
import {UsersType} from "./UsersContainer";

type UsersPropsType = {
    onPageChanged: (page: number) => void
} & UsersType

const Users = ({
                   totalUsersCount, pageSize,
                   onPageChanged, currentPage,
                   users, unFollow, follow
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
                            onClick={() => onPageChanged(p)}
                            className={currentPage === p ? s.selectedPage : s.page}
                        >{p}
                        </span>
                    ))
                }
            </div>
            {users.map(u => <div key={u.id}>
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
                                onClick={() => unFollow(u.id)}
                            >
                                Unfollow
                            </button>
                            : <button
                                className={s.btnStyle}
                                onClick={() => follow(u.id)}
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