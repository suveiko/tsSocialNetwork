import {Component, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../../store/store";
import {getProfileOfUser, getStatus, setUserProfile, updateStatus} from "../../../store/profileReducer/profileReducer";
import {getProfile, getProfileStatus} from "../../../store/profileReducer/profileSelectors";
import {getAuthorizedUserId, getLoginAuth} from "../../../store/authReducer/authSelectors";

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
            if (!userId) {
                this.props.history.push('/login')
            }
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
        profile: getProfile(state),
        status: getProfileStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getLoginAuth(state)
    }
}
const mapDispatchToProps = {
    setUserProfile, getProfileOfUser,
    getStatus, updateStatus
}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)

