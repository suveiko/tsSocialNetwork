import {StoreType} from "../store";


export const getLoginAuth = (state: StoreType) => state.auth.isAuth
export const getAuthorizedUserId = (state: StoreType) => state.auth.id