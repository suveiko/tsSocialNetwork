import {connect} from "react-redux";

import {addPost} from '../../../../store/profileReducer'
import {StoreType} from "../../../../store/redux-store";

import {MyPosts} from "./MyPosts";


export type MyPostsType = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
    } as const
}
const mapDispatchToProps = {addPost}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)