import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";


export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}