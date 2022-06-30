import {connect} from "react-redux";

import {addPost, PostsArrayType, updateNewPostText} from '../../../redux/profileReducer'
import {StoreType} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";


export type MapStateToPropsType = {
    posts: PostsArrayType[]
    newPostText: string
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps ={addPost, updateNewPostText}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)