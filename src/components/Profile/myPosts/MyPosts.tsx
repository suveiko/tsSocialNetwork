import {ChangeEvent, KeyboardEvent} from "react";

import {MyPostsType} from "./MyPostsContainer";
import {Post} from "./posts/Post";

import s from "./MyPosts.module.css"


export const MyPosts = ({posts, newPostText, updateNewPostText, addPost}: MyPostsType) => {

    const postsElements = posts.map((({id, message, likeCounts}) =>
            <Post
                key={id}
                message={message}
                likeCounts={likeCounts}
            />
    ))

    const addNewPost = () => addPost()
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && newPostText.trim() !== '' && addNewPost()
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => updateNewPostText(e.currentTarget.value)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input
                        value={newPostText}
                        onChange={onChangeInputHandler}
                        onKeyDown={onKeyInputHandler}
                    />
                    <button
                        className={s.button}
                        onClick={addNewPost}
                        disabled={newPostText.trim() === ''}
                    >
                        Submit
                    </button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}