import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className='nav'>
            <Link className='nav__link' to='/'>
                <h1 className='nav__title'>Band Name Generator</h1>
            </Link>
            <NavLink className='nav__link' to='/about'>About</NavLink>
        </nav>
    )
}
