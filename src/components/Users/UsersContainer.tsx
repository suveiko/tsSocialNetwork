import React from "react";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    getUsers, onChangeUsers,
    unFollowFromUser, followOnUser
} from "../../redux/usersReducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type UsersType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class UsersComponent extends React.Component<UsersType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (page: number) => this.props.onChangeUsers(page, this.props.pageSize)

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
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {
    getUsers, onChangeUsers,
    unFollowFromUser, followOnUser
}


export const UsersContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(UsersComponent as any))