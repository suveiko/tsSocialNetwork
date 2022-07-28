import {StoreType} from "./store";


export const getUsers = (state: StoreType) => state.usersPage.users
export const getPageSize = (state: StoreType) => state.usersPage.pageSize
export const getTotalUserCount = (state: StoreType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: StoreType) => state.usersPage.currentPage
export const getIsFetching = (state: StoreType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: StoreType) => state.usersPage.followingInProgress