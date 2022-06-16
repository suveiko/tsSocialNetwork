import {NavLink} from "react-router-dom";

import s from './Navbar.module.css'


export const Navbar = () => {

    const stateForNavLink = [
        {link: '/profile', name: 'Profile'},
        {link: '/dialogs', name: 'Messages'},
        {link: '/users', name: 'Users'},
        {link: '/news', name: 'News'},
        {link: '/music', name: 'Music'},
        {link: '/settings', name: 'Settings'},
        {link: '/friends', name: 'Friends'},
    ]

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {stateForNavLink.map(({link, name}, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={link}
                            activeClassName={s.active}
                        >
                            <div>{name}</div>
                        </NavLink>
                    )
                })}
            </div>
        </nav>
    )
}