import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../redux/state";

type ProfileType = {
    state: {
        posts: PostsArrayType[]
    }
}

export const Profile = ({state}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    )
}