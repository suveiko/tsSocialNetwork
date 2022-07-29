import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";

import {Post} from "./Post/Post";
import {MyPostReduxForm} from "./MyPostForm/MyPostForm";

import {addPost} from "../../../../store/profileReducer/profileReducer";
import {getProfilePosts} from "../../../../store/profileReducer/profileSelectors";

import s from "./MyPosts.module.css"


export type FormDataType = {
    newDialogBody: string
}


export const MyPosts = () => {
    const posts = useAppSelector(getProfilePosts)
    const dispatch = useAppDispatch()

    const postsElements = posts.map((({id, message, likes}) =>
            <Post
                key={id}
                message={message}
                likes={likes}
            />
    ))

    const onSubmit = (value: FormDataType) => {
        dispatch(addPost(value.newDialogBody))
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