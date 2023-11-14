import React from 'react';
import "./FormComponents.css"
export const Input = ({
    type,
    id,
    value,
    required,
    additionalClass,
    name,
    placeholder,
    manipulationFunction
}) => {
    return(
        <input 
        type={type}
        id={id}
        name={name}
        value={value}
        required = {required}
        className={`input-component ${additionalClass}`}
        placeholder={placeholder}
        autoComplete='off'
        onChange={manipulationFunction}
        />
    )
}

export const Button = ({textButton,id, name, type, additionalClass, manipulationFunction}) => {
    return(
        <button 
        type={type}
        name={name}
        id= {id}
        className={`button-component ${additionalClass}`}
        onClick={manipulationFunction}
        >
            {textButton}
        </button>
    );
}