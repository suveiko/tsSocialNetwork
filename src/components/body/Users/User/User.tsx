import {NavLink} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";

import {getFollowingInProgress} from "../../../../store/usersReducer/usersSelectors";
import {followOnUser, unFollowFromUser} from "../../../../store/usersReducer/usersReducer";

import {UserType} from "../../../../api/api";

import s from "../Users.module.css";
import avatar from "../../../../assets/user-icon.png";


type UserTypeProps = {
    user: UserType
}


const User = ({user}: UserTypeProps) => {
    const followingInProgress = useAppSelector(getFollowingInProgress)
    const dispatch = useAppDispatch()

    const onClickUnFollowFromUser = (id: number) => dispatch(unFollowFromUser(id))
    const onClickFollowOnUser = (id: number) => dispatch(followOnUser(id))

    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : avatar}
                            alt="avatar"
                            className={s.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button
                                className={s.btnStyle}
                                onClick={() => onClickUnFollowFromUser(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}
                            >
                                Unfollow
                            </button>
                            : <button
                                className={s.btnStyle}
                                onClick={() => onClickFollowOnUser(user.id)}
                                disabled={followingInProgress.some(id => id === user.id)}
                            >
                                Follow
                            </button>
                    }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
    );
};


export default User;