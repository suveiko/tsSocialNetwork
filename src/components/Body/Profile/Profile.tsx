import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

import s from "./Profile.module.css"

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.container}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}