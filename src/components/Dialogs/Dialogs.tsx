import {ChangeEvent, KeyboardEvent} from "react";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {
    ActionsType,
    addMessageActionCreator,
    DialogsArrayType,
    MessagesArrayType,
    updateNewMessageTextActionCreator
} from "../../redux/state";

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

    const addMessage = () => dispatch(addMessageActionCreator())
    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }
    const onKeyInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && state.newMessageTextValue.trim() !== '' && addMessage()
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
