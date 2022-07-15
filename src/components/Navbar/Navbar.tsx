import {NavLink} from "react-router-dom";

import s from './Navbar.module.css'


const Navbar = () => {

    const stateForNavLink = [
        {link: '/profile', name: 'Profile'},
        {link: '/dialogs', name: 'Messages'},
        {link: '/users', name: 'Users'},
    ]

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {stateForNavLink.map(({link, name}, i) => (
                    <NavLink
                        key={i}
                        to={link}
                        activeClassName={s.active}
                    >
                        <div>{name}</div>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Navbar