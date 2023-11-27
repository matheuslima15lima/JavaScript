import React , { useContext }from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
const ImportantePage = () => {
    const {theme}= useContext(ThemeContext);
    return (
        <div>
           <h1>Importante</h1> 
        </div>
    );
};

export default ImportantePage;