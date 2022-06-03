import {ChangeEvent, KeyboardEvent} from "react";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {DialogsArrayType, MessagesArrayType} from "../../redux/state";

import s from "./Dialogs.module.css"

type DialogsPropsType = {
    state: {
        messages: MessagesArrayType[]
        dialogs: DialogsArrayType[]
        newMessageTextValue: string
    }
    newMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs = ({state, ...props}: DialogsPropsType) => {
    const dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addMessage = () => props.addMessage()

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        props.newMessageText(e.currentTarget.value)
    }
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && state.newMessageTextValue.trim() !== '') {
            props.addMessage()
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <button
                style={{cursor: 'pointer'}}
                onClick={addMessage}
                disabled={state.newMessageTextValue.trim() === ''}
            >
                Add message
            </button>
            <input
                value={state.newMessageTextValue}
                onChange={onChangeMessage}
                onKeyUp={onKeyInputHandler}
            />
        </div>
    )
}
