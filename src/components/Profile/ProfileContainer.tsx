import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../redux/redux-store";
import {getProfileOfUser, ProfileUserType, setUserProfile} from "../../redux/profileReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type MapStateToPropsType = {
    profile: ProfileUserType
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
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
const mapDispatchToProps = {
    setUserProfile,
    getProfileOfUser
}

const withUrlDataContainerComponent = withRouter(ProfileComponent as any)

export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent))