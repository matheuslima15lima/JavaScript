

import { useState } from "react";
import Titulo from "./Titulo";
import "./App.css";



function App() {
  const [nome, setNome] = useState("Matheus");
  const[sobrenome, setSobrenome] = useState("")
  
function alterarNome() {
  setNome("Gabriel");

}
  return (
    <div className="App">
     <h1>Bem Vindo - {nome}</h1>

     <Titulo texto={`Bla ${nome} ${sobrenome}`}/>
     <p>Nome: <strong>{nome} {sobrenome}</strong></p>

      <br />
      <input 
      type="text" 
      placeholder="Digite seu nome" 
      value={nome}
      onChange={(e)=>{
        setNome(e.target.value) //target é o input
      }}
      />
      <input 
      type="text" 
      placeholder="Digite seu sobrenome" 
      value={sobrenome}
      onChange={(e)=>{
        setSobrenome(e.target.value) //target é o input
      }}
      />

     <br />
     <button onClick={alterarNome}>Mudar Nome</button>
    </div>
  );
}

export default App;
