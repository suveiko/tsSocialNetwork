import {updateNewPostTextActionCreator, addPostActionCreator, PostsArrayType} from '../../../redux/profileReducer'
import {StoreType} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    posts: PostsArrayType[]
    newPostText: string
}
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}


// export const MyPostsContainer = () => {
//
//     const state = store.getState().profilePage
//
//     const addNewPost = () => store.dispatch(addPostActionCreator())
//     const onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text))
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addNewPost}
//             posts={state.posts}
//             newPostText={state.newPostText}
//         />
//     )
// }

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)