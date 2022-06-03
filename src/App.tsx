import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {StateType} from "./redux/state";

type AppType = {
    state: StateType
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
    updateNewPostText: (newMessage: string) => void
    addPost: () => void
}

function App({state, updateNewMessageText, addMessage, addPost, updateNewPostText}: AppType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        state={state.messagesPage}
                        newMessageText={updateNewMessageText}
                        addMessage={addMessage}
                    />
                }/>
                <Route path='/profile' render={() =>
                    <Profile
                        state={state.profilePage}
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}
                    />
                }/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/friends' render={Friends}/>
            </div>
        </div>
    );
}

export default App;
