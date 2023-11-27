import React from "react";
import'./Titulo.css';
const Titulo = (props /*objeto que representa as propriedades*/) => {
    return (
        <h1 className="titulo">Olá {props.texto}</h1>
    );
}

export default Titulo;