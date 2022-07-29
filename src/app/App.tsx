import {Component, FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";

import Dialogs from "../components/body/Dialogs/DialogsContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import Login from "../components/body/Login/Login";
import Profile from "../components/body/Profile/Profile";
import Navbar from "../components/navbar/Navbar";
import Users from "../components/body/Users/Users";

import {initializeApp} from "../store/appReducer/appReducer";
import {getAppInitialized} from "../store/appReducer/appSelectors";
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
                    <Route path='/profile/:userId?' render={() => <Profile/>}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreType) => ({
    state: getAppInitialized(state)
})
const mapDispatchToProps = {initializeApp}


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)
