import React from "react";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleIsFetching, unFollow, UsersArrayType
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

import {usersAPI} from "../../api/api";


export type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


class UsersComponent extends React.Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent as any)