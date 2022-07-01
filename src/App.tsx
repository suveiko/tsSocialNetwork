import React from "react";
import {Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {UsersContainer} from "./components/Users/UsersContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer  />}/>
            </div>
        </div>
    );
}

export default App;
