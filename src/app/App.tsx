import {useEffect} from "react";
import {Route, withRouter} from "react-router-dom";

import {useAppDispatch} from "../hooks/hooks";

import Login from "../components/body/Login/Login";
import Profile from "../components/body/Profile/Profile";
import Navbar from "../components/navbar/Navbar";
import Users from "../components/body/Users/Users";
import Header from "../components/header/Header";
import Dialogs from "../components/body/Dialogs/Dialogs";

import {initializeApp} from "../store/appReducer/appReducer";

import Preloader from "../components/common/Preloader/Preloader";

import './App.css';


function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])


    if (!initializeApp) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <Header/>
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


export default withRouter(App)
