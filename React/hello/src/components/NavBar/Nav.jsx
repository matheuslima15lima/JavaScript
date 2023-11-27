import React, { useContext } from 'react';
import {Link} from 'react-router-dom'

import { ThemeContext } from '../../Context/ThemeContext';
const Nav = () => {
    const {theme, setTheme}= useContext(ThemeContext);

    function alterarTema(){
        setTheme(theme === 'light'? 'dark':'light')
    }

    return (
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/produtos">Home</Link>
        <Link to="/Importante">Importante</Link>
        <Link to="/meus-pedidos">Meus Pedidos</Link>
        <button onClick={alterarTema}>{theme}</button>
      </nav>
    );
};

export default Nav;