import {ReactNode} from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profileReducer";


type ProfileType = {
    children?: ReactNode
    profile: ProfileUserType
}

export const Profile = ({children, profile}: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
            {children}
        </div>
    )
}