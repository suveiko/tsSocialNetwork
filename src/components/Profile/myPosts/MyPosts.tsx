import {ChangeEvent, KeyboardEvent} from "react";

import {Post} from "./posts/Post";
import {ActionsType, PostsArrayType} from "../../../redux/state";

import s from "./MyPosts.module.css"

type MyPostsType = {
    posts: PostsArrayType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = ({posts, newPostText, dispatch}: MyPostsType) => {
    let postsElements = posts.map((({id, message, likeCounts}) =>
            <Post
                key={id}
                message={message}
                likeCounts={likeCounts}
            />
    ))

    const addPost = () => dispatch({type: "ADD-POST"})
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && newPostText.trim() !== '' && dispatch({type: "ADD-POST"})
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newMessage: e.currentTarget.value})
    }

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
                        style={{cursor: 'pointer'}}
                        onClick={addPost}
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