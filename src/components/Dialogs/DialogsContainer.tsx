import {Dispatch} from "redux";
import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {
    addMessageActionCreator, DialogsArrayType,
    MessagesArrayType, updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'

import {Dialogs} from "./Dialogs";


export type mapStateToPropsType = {
    dialogs: DialogsArrayType[]
    messages: MessagesArrayType[]
    newMessageTextValue: string
}
export type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (body: string) => void
}


const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageTextValue: state.dialogsPage.newMessageTextValue
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (newMessage: string) => dispatch(updateNewMessageTextActionCreator(newMessage))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
