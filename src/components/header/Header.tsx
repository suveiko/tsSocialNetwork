import {NavLink} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

import {logout} from "../../store/authReducer/authReducer";

import s from './Header.module.css';


const Header = () => {
    const {isAuth, login} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
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


export default Header