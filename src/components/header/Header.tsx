import {NavLink} from "react-router-dom";

import {HeaderComponentType} from "./HeaderContainer";

import s from './Header.module.css';


export const Header = ({data, logout}: HeaderComponentType) => {

    const {isAuth, login} = data
    const logoutHandler = () => {
        logout()
    }

    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png'
                alt="#"
            />
            <div className={s.loginBlock}>
                {
                    isAuth
                        ? <div>{login} - <button onClick={logoutHandler}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}