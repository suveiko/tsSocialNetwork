import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderComponentType} from "./HeaderContainer";


export const Header = ({data}: HeaderComponentType) => {

    const {isAuth, id, login, email} = data

    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png'
                alt="#"
            />

            <div className={s.loginBlock}>
                {
                    isAuth
                        ? login
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}