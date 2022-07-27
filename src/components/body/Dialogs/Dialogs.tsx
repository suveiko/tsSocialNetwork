import {DialogsContainerType} from "./DialogsContainer";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {LoginReduxForm} from "./DialogForm/DialogForm";

import s from "./Dialogs.module.css"



export type FormDataType = {
    newMessageBody: string
}


export const Dialogs = ({dialogs, messages, addMessage}: DialogsContainerType) => {

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

    const onSubmit = (value: FormDataType) => {
        addMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <LoginReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}
