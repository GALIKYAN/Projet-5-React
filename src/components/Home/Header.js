import React from 'react';
import logo from '../Assets/images/logo.png'
import '../Assets/style/Header.css';

function Header() {
    return (
        <div className="header-container">
            <img src={logo} alt='logo kasa' className='logo' />
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À Propos</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
