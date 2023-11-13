import React from 'react';

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
        className={`input-component${additionalClass}`}
        placeholder={placeholder}
        autoComplete='off'
        
        />
    )
}