import {Route} from "react-router-dom";

import UsersContainer from "../components/Body/Users/UsersContainer";
import Dialogs from "../components/Body/Dialogs/DialogsContainer";
import ProfileContainer from "../components/Body/Profile/ProfileContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Body/Login/Login";


import './App.css';


function App() {
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

export default App;
