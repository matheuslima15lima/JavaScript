import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import logoMobile from '../../Assets/images/images/logo-white.svg';
import logoDesktop from '../../Assets/images/images/logo-pink.svg';

const Nav = ({setExibeNavBar, exibeNavbar}) => {
    return (
       <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
        <span className='navbar__close' onClick={() => {setExibeNavBar(false)}}>x</span>

        <Link to="/">
            <img className='eventlogo__logo-image' 
            src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
             alt="Event plus logo" />
        </Link>

        <div className='navbar__items-box'>
            <Link to= "/">Home</Link>
            <Link to= "/tipo-eventos">Tipo Eventos</Link>
            <Link to= "/eventos">Eventos</Link>
            <Link to= "/login">Login</Link>

        </div>
       </nav>
    );
};

export default Nav;