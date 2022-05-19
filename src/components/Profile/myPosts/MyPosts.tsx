import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"
import {PostsArrayType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsArrayType[]
    addPost: (newMessage: string) => void
}

export const MyPosts = ({posts, ...props}: MyPostsType) => {
    let postsElements = posts.map((p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Submit</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}