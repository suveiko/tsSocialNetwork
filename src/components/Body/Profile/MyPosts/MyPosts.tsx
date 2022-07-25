import {MyPostsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {MyPostReduxForm} from "./MyPostForm/MyPostForm";

import s from "./MyPosts.module.css"


export type FormDataType = {
    newDialogBody: string
}


export const MyPosts = ({posts, addPost}: MyPostsType) => {

    const postsElements = posts.map((({id, message, likes}) =>
            <Post
                key={id}
                message={message}
                likes={likes}
            />
    ))

    const onSubmit = (value: FormDataType) => {
        addPost(value.newDialogBody)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={onSubmit}/>
            </div>
            {postsElements}
        </div>
    )
}