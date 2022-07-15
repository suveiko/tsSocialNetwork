import {connect} from "react-redux";

import {StoreType} from "../../redux/redux-store";
import {addMessage, updateNewMessageText} from '../../redux/dialogsReducer'

import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type DialogsContainerType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageTextValue: state.dialogsPage.newMessageTextValue,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {addMessage, updateNewMessageText}


export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
