import {Component, FC} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {StoreType} from "../../../store/store";
import {
    requestUsers, onChangeUsers,
    unFollowFromUser, followOnUser
} from "../../../store/usersReducer/usersReducer";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUserCount, getUsers
} from "../../../store/usersReducer/usersSelectors";

import Users from "./Users";

import Preloader from "../../common/Preloader/Preloader";



export type UsersType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class UsersContainer extends Component<UsersType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
const mapDispatchToProps = {
    requestUsers, onChangeUsers,
    unFollowFromUser, followOnUser
}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer)




