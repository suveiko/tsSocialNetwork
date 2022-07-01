import Preloader from "../../common/Preloader/Preloader";

import {ProfileUserType} from "../../../redux/profileReducer";

import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/user-icon.png"


type ProfileInfo = {
    profile: ProfileUserType
}

export const ProfileInfo = ({profile}: ProfileInfo) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={s.img}
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    alt="#"
                />
            </div>
            <div className={s.descriptionBlock}>
                <img
                    className={s.userPhoto}
                    src={!profile.photos.small ? avatar : profile.photos.small}
                    alt="avatar"
                />
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>My Github - {profile.contacts.github}</div>
            </div>
        </div>
    )
}