import React from "react";
import {connect} from "react-redux";

import {Profile} from "./Profile";
import axios from "axios";
import {StoreType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profileReducer";


export type MapDispatchToPropsType = { setUserProfile: (profile: null) => void }
export type ProfileType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType


class ProfileComponent extends React.Component<ProfileType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StoreType) => ({profile: state.profilePage.profile})
const mapDispatchToProps = {setUserProfile}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent as any);