import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {addMessage, DialogsArrayType, MessagesArrayType, updateNewMessageText} from '../../redux/dialogsReducer'

import {Dialogs} from "./Dialogs";


export type MapStateToPropsType = {
    dialogs: DialogsArrayType[]
    messages: MessagesArrayType[]
    newMessageTextValue: string
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageTextValue: state.dialogsPage.newMessageTextValue
    }
}
const mapDispatchToProps = {addMessage, updateNewMessageText}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
