import React from "react";
import {Redirect} from "react-router-dom";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    isAuth?: boolean
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect(Component: any) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}