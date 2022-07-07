import {connect} from "react-redux";

import {addPost, updateNewPostText} from '../../../redux/profileReducer'
import {StoreType} from "../../../redux/redux-store";

import {MyPosts} from "./MyPosts";


export type MyPostsType = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    } as const
}
const mapDispatchToProps = {addPost, updateNewPostText}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)