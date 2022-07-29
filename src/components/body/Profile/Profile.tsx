import {ProfileType} from "./ProfileContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = (props: ProfileType) => {
    return (
        <div className={s.container}>
            <ProfileInfo {...props}/>
            <MyPosts/>
        </div>
    )
}