import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostsArrayType} from "../../redux/state";

type ProfileType = {
    state: {
        posts: PostsArrayType[]
        newPostText: string
    }
    dispatch: (action: ActionsType) => void
}

export const Profile = ({state, dispatch}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={state.posts}
                newPostText={state.newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}