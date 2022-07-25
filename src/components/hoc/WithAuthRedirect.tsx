import {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {StoreType} from "../../store/redux-store";


type MapStateToPropsType = {
    isAuth?: boolean
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: FC<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}