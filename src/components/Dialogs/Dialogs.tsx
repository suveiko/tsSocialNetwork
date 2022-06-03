import {ChangeEvent, KeyboardEvent} from "react";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {ActionsType, DialogsArrayType, MessagesArrayType} from "../../redux/state";

import s from "./Dialogs.module.css"

type DialogsPropsType = {
    state: {
        messages: MessagesArrayType[]
        dialogs: DialogsArrayType[]
        newMessageTextValue: string
    }
    dispatch: (action: ActionsType) => void
}

export const Dialogs = ({state, dispatch}: DialogsPropsType) => {

    const dialogsElement = state.dialogs.map(({id, name}) =>
        <DialogItem
            key={id}
            id={id}
            name={name}
        />
    )
    const messagesElement = state.messages.map(({id, message}) =>
        <Message
            key={id}
            message={message}
        />
    )

    const addMessage = () => dispatch({type: "ADD-MESSAGE"})
    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: e.currentTarget.value})
    }
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && state.newMessageTextValue.trim() !== '' && dispatch({type: "ADD-MESSAGE"})
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
