import {Component, FC} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {Header} from "./Header";

import {StoreType} from "../../store/store";
import {logout} from "../../store/authReducer";


export type HeaderComponentType = ReturnType<typeof mapStateToProps>
    & typeof mapDispatchToProps


class HeaderContainer extends Component<HeaderComponentType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType) => ({data: state.auth})
const mapDispatchToProps = {logout}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer)