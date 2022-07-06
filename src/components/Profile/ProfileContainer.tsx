import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../redux/redux-store";
import {ProfileUserType, setUserProfile} from "../../redux/profileReducer";

import {usersAPI} from "../../api/api";


type ParamsType = {
    userId: string
}
export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileUserType) => void
}
export type ProfileType = ReturnType<typeof mapStateToProps>
    & MapDispatchToPropsType
    & RouteComponentProps<ParamsType>


class ProfileComponent extends React.Component<ProfileType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        usersAPI.getProfileOfUser(userId)
            .then(data => this.props.setUserProfile(data))
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StoreType) => ({profile: state.profilePage.profile})
const mapDispatchToProps = {setUserProfile}

const withUrlDataContainerComponent = withRouter(ProfileComponent as any)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);