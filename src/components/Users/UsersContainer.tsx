import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    follow, setCurrentPage,
    setTotalUsersCount, setUsers,
    toggleIsFetching, unFollow, UsersArrayType
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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