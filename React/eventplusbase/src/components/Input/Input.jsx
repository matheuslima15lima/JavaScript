import React, { useState } from 'react';

const Input = (props) => {
    
    return (
        <div>
            <input 
            id= {props.tipo}
            name= {props.nome}
            type= {props.number}
             placeholder={props.dicaCampo}
             value = {props.valor}
             onChange={(e)=>{
                props.fnAltera(e.target.value)
            }}
             
             />
             <span>{props.valor}</span>
        </div>
    );
};

export default Input;