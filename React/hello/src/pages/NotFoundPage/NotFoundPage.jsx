import React , { useContext }from 'react'; 
import { ThemeContext } from '../../Context/ThemeContext';
import{Link} from "react-router-dom"
const NotFoundPage = () => {
    const {theme}= useContext(ThemeContext);
    return (
        <>
            <h1>Página não encontrada</h1> 
            <Link to="/">Home</Link>
            <span>Tema Atual:{theme}</span>  
        </>
    );  
};

export default NotFoundPage;