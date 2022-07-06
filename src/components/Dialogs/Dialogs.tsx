import {ChangeEvent, KeyboardEvent} from "react";

import {DialogsContainerType} from "./DialogsContainer";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";

import s from "./Dialogs.module.css"


export const Dialogs = ({
                            updateNewMessageText, dialogs, messages,
                            newMessageTextValue, addMessage
                        }: DialogsContainerType) => {

    const dialogsElement = dialogs.map(({id, name}) =>
        <DialogItem
            key={id}
            id={id}
            name={name}
        />
    )
    const messagesElement = messages.map(({id, message}) =>
        <Message
            key={id}
            message={message}
        />
    )

    const addNewMessage = () => addMessage()
    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewMessageText(e.currentTarget.value)
    }
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && newMessageTextValue.trim() !== '' && addNewMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <button className={s.button}
                    onClick={addNewMessage}
                    disabled={newMessageTextValue.trim() === ''}
            >
                Add message
            </button>
            <input
                value={newMessageTextValue}
                onChange={onChangeMessage}
                onKeyUp={onKeyInputHandler}
            />
        </div>
    )
}
