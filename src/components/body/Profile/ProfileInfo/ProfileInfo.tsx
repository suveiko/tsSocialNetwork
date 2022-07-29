import {ProfileStatus} from "./ProfileStatus"

import Preloader from "../../../common/Preloader/Preloader";

import s from "./ProfileInfo.module.css";
import avatar from "../../../../assets/user-icon.png"
import {useAppSelector} from "../../../../hooks/hooks";
import {getProfile} from "../../../../store/profileReducer/profileSelectors";



export const ProfileInfo = () => {
    const profile = useAppSelector(getProfile)

    if (!profile) return <Preloader/>

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    className={s.userPhoto}
                    src={!profile.photos.small ? avatar : profile.photos.small}
                    alt="avatar"
                />
                <ProfileStatus />
                <div>{profile.fullName}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <div>My Github - {profile.contacts.github}</div>
            </div>
        </div>
    )
}