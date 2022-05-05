import s from "./ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descripription
            </div>
        </div>
    )
}