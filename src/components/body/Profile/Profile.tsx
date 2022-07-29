import {NavLink, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

import {getProfileOfUser, getStatus} from "../../../store/profileReducer/profileReducer";
import {getAuthorizedUserId, getLoginAuth} from "../../../store/authReducer/authSelectors";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

import s from "./Profile.module.css"


const Profile = () => {
    const isAuth = useAppSelector(getLoginAuth)
    const authorizedUserId = useAppSelector(getAuthorizedUserId)
    const dispatch = useAppDispatch()
    let {userId} = useParams<{ userId: string }>();

    if (!userId) {
        userId = String(authorizedUserId)
    }

    userId && dispatch(getProfileOfUser(+userId))
    userId && dispatch(getStatus(+userId))

    if (!isAuth) return <NavLink to={'/login'}/>

    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}


export default WithAuthRedirect(Profile)