import React, { useState } from 'react';
import './Header.css'
import Container from '../Container/Container';
import Nav from '../Nav/Nav';
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario'
import menubar from '../../Assets/images/images/menubar.png'

const Header = () => {
    const [exibeNavBar, setExibeNavBar] = useState(false)
    // console.log(`Exibe a  NAVBAR? ${exibeNavBar}`);
    return (
     <header className='headerpage'>
        <Container>
            <div className='header-flex'>
                <img src={menubar}
                className='headerpage__menubar'
                alt="Imagem menu de barras.Serve para exibir ou esconder o menu no smartphone." 
                    onClick={() => {setExibeNavBar(true)}}
                />

                <Nav
                    exibeNavbar = {exibeNavBar}
                    setExibeNavBar = {setExibeNavBar}
                />

                <PerfilUsuario/>
            </div>
        </Container>
    
     </header>
    );
};

export default Header;