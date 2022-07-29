import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {LoginReduxForm} from "./DialogForm/DialogForm";

import {addMessage} from "../../../store/dialogReducer/dialogsReducer";
import {getDialogs, getMessages} from "../../../store/dialogReducer/dialogsSelectors";

import s from "./Dialogs.module.css"


export type FormDataType = {
    newMessageBody: string
}


const Dialogs = () => {
    const dialogs = useAppSelector(getDialogs)
    const messages = useAppSelector(getMessages)
    const dispatch = useAppDispatch()

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
        dispatch(addMessage(value.newMessageBody))
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


export default Dialogs
