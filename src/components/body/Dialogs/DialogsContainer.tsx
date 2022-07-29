import {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {StoreType} from "../../../store/store";
import {addMessage} from '../../../store/dialogReducer/dialogsReducer'
import {getDialogs, getMessages} from "../../../store/dialogReducer/dialogsSelectors";

import {Dialogs} from "./Dialogs";


export type DialogsContainerType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}
const mapDispatchToProps = {addMessage}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)


