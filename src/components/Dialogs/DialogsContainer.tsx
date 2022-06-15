import {StoreType} from "../../redux/redux-store";

import {
    addMessageActionCreator, DialogsArrayType,
    MessagesArrayType, updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    dialogs: DialogsArrayType[]
    messages: MessagesArrayType[]
    newMessageTextValue: string
}
export type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (body: string) => void
}


// export const DialogsContainer = () => {
//
//     const state = store.getState().dialogsPage
//
//     const addMessage = () => store.dispatch(addMessageActionCreator())
//     const onChangeMessage = (newMessage: string) => {
//         store.dispatch(updateNewMessageTextActionCreator(newMessage))
//     }
//
//     return <Dialogs
//         state={state}
//         updateNewMessageText={onChangeMessage}
//         addMessage={addMessage}
//     />
//
// }

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageTextValue: state.dialogsPage.newMessageTextValue
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
