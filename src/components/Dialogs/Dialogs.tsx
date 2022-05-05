import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Artem' id='2'/>
                <DialogItem name='Svetlana' id='3'/>
                <DialogItem name='Sergey' id='4'/>
                <DialogItem name='Jack' id='5'/>
                <DialogItem name='Mike' id='6'/>
            </div>
            <div className={s.messages}>
                <Message mess='Hi'/>
                <Message mess='How are you?'/>
                <Message mess='Where are you from?'/>
                <Message mess='Howdy'/>
                <Message mess='Yo'/>
                <Message mess='Yo'/>
            </div>
        </div>

    )
}