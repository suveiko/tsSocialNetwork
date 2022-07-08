import React from "react";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../redux/redux-store";
import {getProfileOfUser, ProfileUserType, setUserProfile} from "../../redux/profileReducer";


export type MapStateToPropsType = {
    profile: ProfileUserType
    isAuth?: boolean
}
export type ProfileType = MapStateToPropsType
    & typeof mapDispatchToProps
    & RouteComponentProps<{ userId: string }>


class ProfileComponent extends React.Component<ProfileType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileOfUser(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {
    setUserProfile,
    getProfileOfUser
}

const withUrlDataContainerComponent = withRouter(ProfileComponent as any)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);