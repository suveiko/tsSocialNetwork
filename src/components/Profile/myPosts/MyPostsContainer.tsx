import {Dispatch} from "redux";
import {connect} from "react-redux";

import {updateNewPostTextActionCreator, addPostActionCreator, PostsArrayType} from '../../../redux/profileReducer'
import {StoreType} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";


export type mapStateToPropsType = {
    posts: PostsArrayType[]
    newPostText: string
}
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)