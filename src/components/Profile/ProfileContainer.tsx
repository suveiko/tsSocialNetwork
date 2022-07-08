import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Profile} from "./Profile";

import {StoreType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profileReducer";

import {usersAPI} from "../../api/api";


export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type ProfileType = MapStateToPropsType
    & typeof mapDispatchToProps
    & RouteComponentProps<{ userId: string }>


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
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => ({profile: state.profilePage.profile})
const mapDispatchToProps = {setUserProfile}

const withUrlDataContainerComponent = withRouter(ProfileComponent as any)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);