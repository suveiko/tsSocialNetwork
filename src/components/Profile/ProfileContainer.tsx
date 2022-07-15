import {Component, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../redux/redux-store";
import {getProfileOfUser, getStatus, ProfileUserType, setUserProfile, updateStatus} from "../../redux/profileReducer";


export type MapStateToPropsType = {
    profile: ProfileUserType
    status: string
}
export type ProfileType = MapStateToPropsType
    & typeof mapDispatchToProps
    & RouteComponentProps<{ userId: string }>


class ProfileContainer extends Component<ProfileType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileOfUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = {
    setUserProfile,
    getProfileOfUser,
    getStatus,
    updateStatus
}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)

