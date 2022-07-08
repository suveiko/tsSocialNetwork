import React from "react";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator, onChangeUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleFollowingProgress,
    toggleIsFetching, unFollow,
} from "../../redux/usersReducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";


export type UsersType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class UsersComponent extends React.Component<UsersType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.onChangeUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        onPageChanged={this.onPageChanged}
                        {...this.props}
                    />
            }
        </>
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = {
    follow, unFollow,
    setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsersThunkCreator,
    onChangeUsersThunkCreator
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent as any)