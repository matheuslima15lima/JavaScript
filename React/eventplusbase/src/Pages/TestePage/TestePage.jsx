import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input'

const TestePage = () => {
    const[total, setTotal] = useState();
    const[n1, setN1] = useState();
    const[n2, setN2] = useState();

    function handleCalcular(e){
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));//parse float para reconhecer os dados como numeros e assim poder soma-los
    }
    return (
        <>
    
        <h1>Pagina de testes</h1>
        <h2>Calculator</h2>
        <form onSubmit = {handleCalcular}>
       
       <Input
       tipo = "number"
       id = "numero1"
       nome = "numero1"
       dicaCampo = "Primeiro Numero"
       valor = {n1}
       fnAltera = {setN1}
       
       />
       <Input
        tipo = "number"
        id = "numero2"
        nome = "numero2"
        dicaCampo = "Segundo Numero"
        valor = {n2}
        fnAltera = {setN2}
       />
       <Button tipo = "submit"
       textoBotao = "Somar"/>
       
       <p>Resultado: <strong>{total}</strong></p> 
    </form>
        </>
 
    );
};

export default TestePage;