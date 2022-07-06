import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {AuthReducerDataType, setAuthUserData} from "../../redux/authReducer";


export type MapStateToPropsType = {
    data: AuthReducerDataType
}
export type HeaderComponentType = MapStateToPropsType & typeof mapDispatchToProps


class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData({id, login, email})
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        data: state.auth
    }
}
const mapDispatchToProps = {setAuthUserData}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent as any)