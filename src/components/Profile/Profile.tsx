import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../redux/state";

type ProfileType = {
    state: {
        posts: PostsArrayType[]
    }
    addPost: (newMessage: string) => void
}

export const Profile = ({state, addPost}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    )
}