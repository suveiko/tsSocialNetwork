import {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {StoreType} from "../../../store/redux-store";
import {addMessage, updateNewMessageText} from '../../../store/dialogsReducer'

import {Dialogs} from "./Dialogs";


export type DialogsContainerType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageTextValue: state.dialogsPage.newMessageTextValue,
    }
}
const mapDispatchToProps = {addMessage, updateNewMessageText}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

