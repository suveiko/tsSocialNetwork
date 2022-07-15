import {Component, FC} from "react";
import {connect} from "react-redux";

import {Header} from "./Header";

import {StoreType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/authReducer";
import {compose} from "redux";


export type HeaderComponentType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class HeaderContainer extends Component<HeaderComponentType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => ({data: state.auth})
const mapDispatchToProps = {
    getAuthUserData
}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer)