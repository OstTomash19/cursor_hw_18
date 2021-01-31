import React from 'react';
import { NavLink } from 'react-router-dom';

import './../css/NavMenuStyles.css';

const NavMenu = () => {
    return(
        <nav className='navMenu'>
            <NavLink to='/main' className='link' activeClassName='active-link'>
                Головна
            </NavLink>
            <NavLink to='/posts' className='link' activeClassName='active-link'>
                Публікації
            </NavLink>
            <NavLink to='/photo' className='link' activeClassName='active-link'>
                Фотографії
            </NavLink>
            <NavLink to='/contacts' className='link' activeClassName='active-link'>
                Контакти
            </NavLink>
        </nav>
    )
}

export default NavMenu;