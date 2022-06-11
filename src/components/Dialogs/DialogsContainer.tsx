import {store} from "../../redux/redux-store";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import {Dialogs} from "./Dialogs";

export const DialogsContainer = () => {

    const state = store.getState().dialogsPage

    const addMessage = () => store.dispatch(addMessageActionCreator())
    const onChangeMessage = (newMessage: string) => {
        store.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return <Dialogs
        state={state}
        updateNewMessageText={onChangeMessage}
        addMessage={addMessage}
    />

}
