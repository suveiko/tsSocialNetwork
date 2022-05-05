import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
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
            <Post message={'Hello, Im Sasha'} likeCounts={10}/>
            <Post message={'Go away'} likeCounts={2}/>
            <Post message={'I like you'} likeCounts={44}/>
            <Post message={'What happend?'} likeCounts={2}/>
            <Post message={'NOOO'} likeCounts={130}/>
            <Post message={'YE'} likeCounts={10232}/>
        </div>
    )
}