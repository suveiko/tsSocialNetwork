import {StoreType} from "../store";


export const getProfile = (state: StoreType) => state.profilePage.profile
export const getProfileStatus = (state: StoreType) => state.profilePage.status
export const getProfilePosts = (state: StoreType) => state.profilePage.posts