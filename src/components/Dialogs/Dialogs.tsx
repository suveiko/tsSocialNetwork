import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        messages: MessagesArrayType[]
        dialogs: DialogsArrayType[]
    }
}

export const Dialogs = ({state}: DialogsPropsType) => {
    const dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    )
}
