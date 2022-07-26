import {Component, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../../store/redux-store";
import {getProfileOfUser, getStatus, setUserProfile, updateStatus} from "../../../store/profileReducer";

import {GetProfileType} from "../../../api/api";


export type MapStateToPropsType = {
    profile: GetProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
export type ProfileType = MapStateToPropsType
    & typeof mapDispatchToProps
    & RouteComponentProps<{ userId: string }>


class ProfileContainer extends Component<ProfileType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
        }
        this.props.getProfileOfUser(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
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

