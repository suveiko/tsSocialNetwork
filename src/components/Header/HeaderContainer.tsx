import React from "react";
import {connect} from "react-redux";

import {Header} from "./Header";

import {StoreType} from "../../redux/redux-store";
import {getMyPage} from "../../redux/authReducer";


export type HeaderComponentType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        this.props.getMyPage()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => ({data: state.auth})
const mapDispatchToProps = {
    getMyPage
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent as any)