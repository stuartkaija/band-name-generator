import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className='nav'>
            <NavLink className='nav__link' to='/'>
                <h1 className='nav__title'>Band Name Generator</h1>
            </NavLink>
            <NavLink className='nav__link' to='/about'>About</NavLink>
        </nav>
    )
}
