import {Component, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";

import UsersContainer from "../components/body/Users/UsersContainer";
import Dialogs from "../components/body/Dialogs/DialogsContainer";
import ProfileContainer from "../components/body/Profile/ProfileContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import Login from "../components/body/Login/Login";
import Navbar from "../components/navbar/Navbar";

import {initializeApp} from "../store/appReducer";
import {StoreType} from "../store/store";

import Preloader from "../components/common/Preloader/Preloader";

import './App.css';


type AppType = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>


class App extends Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreType) => ({
    state: state.app.initialized
})
const mapDispatchToProps = {initializeApp}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
