import {Component, FC} from "react";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    getUsers, onChangeUsers,
    unFollowFromUser, followOnUser
} from "../../redux/usersReducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export type UsersType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class UsersContainer extends Component<UsersType> {

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
    }
}
const mapDispatchToProps = {
    getUsers, onChangeUsers,
    unFollowFromUser, followOnUser
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(UsersContainer)




