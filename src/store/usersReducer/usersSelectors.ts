import {StoreType} from "../store";

import {createSelector} from "reselect";


export const getUsersSelector = (state: StoreType) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, users => users)

export const getPageSizeSelector = (state: StoreType) => state.usersPage.pageSize
export const getPageSize = createSelector(getPageSizeSelector, pageSize => pageSize)

export const getTotalUserCountSelector = (state: StoreType) => state.usersPage.totalUsersCount
export const getTotalUserCount = createSelector(getTotalUserCountSelector, totalUsersCount => totalUsersCount)

export const getCurrentPageSelector = (state: StoreType) => state.usersPage.currentPage
export const getCurrentPage = createSelector(getCurrentPageSelector, currentPage => currentPage)

export const getIsFetchingSelector = (state: StoreType) => state.usersPage.isFetching
export const getIsFetching = createSelector(getIsFetchingSelector, isFetching => isFetching)

export const getFollowingInProgressSelector = (state: StoreType) => state.usersPage.followingInProgress
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, followingInProgress => followingInProgress)