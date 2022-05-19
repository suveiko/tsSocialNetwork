import React, {useRef} from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {PostsArrayType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsArrayType[]
}

export const MyPosts = ({posts}: MyPostsType) => {
    let postsElements = posts.map((p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>))

    let newPostElement = useRef() as React.RefObject<HTMLInputElement>
    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input ref={newPostElement}></input>
                </div>
                <div>
                    <button onClick={addPost}>Submit</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}