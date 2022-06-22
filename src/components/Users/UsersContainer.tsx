import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {StoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersArrayType} from "../../redux/usersReducer";

import Users from "./Users";


export type mapStateToPropsType = {
    users: UsersArrayType[]
}
export type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersArrayType[]) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unFollow: (userId: string) => dispatch(unFollowAC(userId)),
        setUsers: (users: UsersArrayType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users as any)