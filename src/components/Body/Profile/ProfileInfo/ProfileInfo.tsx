import {ProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus"

import Preloader from "../../../common/Preloader/Preloader";

import s from "./ProfileInfo.module.css";
import avatar from "../../../../assets/user-icon.png"


export const ProfileInfo = ({profile, status, updateStatus}: ProfileType) => {

    if (!profile) return <Preloader/>

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    className={s.userPhoto}
                    src={!profile.photos.small ? avatar : profile.photos.small}
                    alt="avatar"
                />
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>My Github - {profile.contacts.github}</div>
            </div>
        </div>
    )
}