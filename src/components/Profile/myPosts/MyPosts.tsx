import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {PostsArrayType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsArrayType[]
}

export const MyPosts = ({posts}: MyPostsType) => {
    let postsElements = posts.map((p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>))

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}