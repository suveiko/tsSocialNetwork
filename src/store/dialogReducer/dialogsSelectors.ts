import {StoreType} from "../store";


export const getDialogs = (state: StoreType) => state.dialogsPage.dialogs
export const getMessages = (state: StoreType) => state.dialogsPage.messages