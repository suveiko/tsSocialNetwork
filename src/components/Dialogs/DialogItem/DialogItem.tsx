import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css"

type DialogItemType = {
    name: string
    id: string
}

export const DialogItem = ({name, id}: DialogItemType) => {
    const path = '/dialogs/' + id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}