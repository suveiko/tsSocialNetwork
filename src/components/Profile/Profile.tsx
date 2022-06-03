import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../redux/state";

type ProfileType = {
    state: {
        posts: PostsArrayType[]
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = ({state, addPost, updateNewPostText}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.posts}
                addPost={addPost}
                newPostText={state.newPostText}
                updateNewPostText={updateNewPostText}
            />
        </div>
    )
}