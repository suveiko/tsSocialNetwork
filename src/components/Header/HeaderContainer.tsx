import React from "react";
import {connect} from "react-redux";

import {Header} from "./Header";

import {StoreType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";

import {usersAPI} from "../../api/api";


export type HeaderComponentType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        usersAPI.getMyPage().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                this.props.setAuthUserData({id, login, email})
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => ({data: state.auth})
const mapDispatchToProps = {setAuthUserData}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent as any)