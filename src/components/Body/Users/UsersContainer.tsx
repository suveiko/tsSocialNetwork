import {Component, FC} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {StoreType} from "../../../store/redux-store";
import {
    getUsers, onChangeUsers,
    unFollowFromUser, followOnUser
} from "../../../store/usersReducer";

import Users from "./Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

import Preloader from "../../common/Preloader/Preloader";




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




