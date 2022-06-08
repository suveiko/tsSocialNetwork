import {Route} from "react-router-dom";

import {ActionsType, StateType} from "./redux/state";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";

import './App.css';

type AppType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({state, dispatch}: AppType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        state={state.dialogsPage}
                        dispatch={dispatch}
                    />
                }/>
                <Route path='/profile' render={() =>
                    <Profile
                        state={state.profilePage}
                        dispatch={dispatch}
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
