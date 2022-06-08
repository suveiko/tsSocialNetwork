import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'
import {store} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";

export const MyPostsContainer = () => {

    const state = store.getState().profilePage

    const addNewPost = () => store.dispatch(addPostActionCreator())
    const onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text))

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addNewPost}
            posts={state.posts}
            newPostText={state.newPostText}
        />
    )
}