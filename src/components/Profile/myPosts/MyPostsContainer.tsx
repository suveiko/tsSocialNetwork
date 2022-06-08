import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'
import {store} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";

export const MyPostsContainer = () => {

    const state = store.getState()

    const addNewPost = () => store.dispatch(addPostActionCreator())
    const onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text))

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addNewPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}