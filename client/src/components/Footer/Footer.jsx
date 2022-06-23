import React from 'react';
import './Footer.scss';
import LI from '../../assets/icons/LI-In-Bug.png';
import GH from '../../assets/icons/GitHub-Mark-Light-120px-plus.png';

export default function Footer() {
  return (
    <footer className='footer'>
        <a href="https://www.linkedin.com/in/stuartkaija/" target='_blank' rel='noreferrer'>
            <img className='footer__icon--LI' src={LI} alt="LinkedIn" />
        </a>
        <a href="https://github.com/stuartkaija/calculator" target='_blank' rel='noreferrer'>
            <img className='footer__icon' src={GH} alt="GitHub" />
        </a>
    </footer>
  )
}
