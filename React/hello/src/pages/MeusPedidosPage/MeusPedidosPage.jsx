import React , { useContext }from 'react';

import { ThemeContext } from '../../Context/ThemeContext';

const MeusPedidosPage = () => {
    const {theme}= useContext(ThemeContext);
    return (
       
        <div>
             <h1>MeusPedidos</h1>
             <span>Tema Atual: {theme}</span>
        </div>
    );
};

export default MeusPedidosPage;