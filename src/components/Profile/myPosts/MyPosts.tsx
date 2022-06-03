import {ChangeEvent, KeyboardEvent} from "react";

import {Post} from "./posts/Post";
import {PostsArrayType} from "../../../redux/state";

import s from "./MyPosts.module.css"

type MyPostsType = {
    posts: PostsArrayType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = ({posts, ...props}: MyPostsType) => {
    let postsElements = posts.map((({id, message, likeCounts}) =>
            <Post
                key={id}
                message={message}
                likeCounts={likeCounts}
            />
    ))

    const addPost = () => props.addPost()

    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && props.newPostText.trim() !== '') {
            props.addPost()
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input
                        value={props.newPostText}
                        onChange={onChangeInputHandler}
                        onKeyDown={onKeyInputHandler}
                    />
                    <button
                        style={{cursor: 'pointer'}}
                        onClick={addPost}
                        disabled={props.newPostText.trim() === ''}
                    >
                        Submit
                    </button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}