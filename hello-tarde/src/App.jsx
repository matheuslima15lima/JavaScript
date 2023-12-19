

import Titulo from "./Titulo";
import "./App.css";
import { useState } from "react";
import axios from "axios";



function App() {
  //states do componente
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  
 
  //funcoes
  // https://viacep.com.br/ws/01001000/json/
  const buscarEndereco = async (cep) =>{
      if(cep.length <8){
        setMensagem("Precisa ter pelo menos 8 numeros");
        return;
      }

      setMensagem(""); //Limpa a mensagem atual
   try {
     const retorno = await axios.get(` https://viacep.com.br/ws/${cep}/json/`)
     console.log(retorno.data);
     if (retorno.data.erro){
      setMensagem("CEP Invalido");
      return;
     }
     //dados ok
     setEndereco(retorno.data.logradouro);
     setBairro(retorno.data.logradouro);
     setCidade(retorno.data.localidade);
     setEstado(retorno.data.uf);
   } catch (error) {
      setMensagem("Erro ao buscar o cep verifique a conexao")
   }
  }
  const salvarContato = async(e) => {
    e.preventDefault();
  try {
        const retorno = await axios.post(" http://localhost:3000/agenda",{
          cep : cep,
          endereco : endereco,
          numero: numero,
          complemento : complemento,
          bairro : bairro,
          cidade : cidade,
          estado : estado,
        });
        setMensagem("Cadastrado com sucesso")
  } catch (error) {
    setMensagem("Erro ao cadastrar")
  }
  }
  return (
    <div className="App">
     <Titulo texto="Agenda de Contato"/>
     <span>{mensagem}</span>
      <form onSubmit={salvarContato}>

      <input type="number" 
      placeholder="digite o cep" 
      name="cep"
      value={cep}
      onChange={(e)=> {setCep(e.target.value)}}
      onBlur={() => {buscarEndereco(cep)}}
      />

      <br />

      <input type="text" 
      placeholder="endereco" 
      name="endereco"
      value={endereco}
      onChange={(e)=> {setEndereco(e.target.value)}}
      />
      <br />

      <input type="text" 
      placeholder="numero" 
      name="numero"
      value={numero}
      onChange={(e)=> {setNumero(e.target.value)}}
      />
      <br />

      <input type="text" 
      placeholder="complemento" 
      name="complemento"
      value={complemento}
      onChange={(e)=> {setComplemento(e.target.value)}}
      />
      <br />

       <input type="text" 
      placeholder="bairro" 
      name="bairro"
      value={bairro}
      onChange={(e)=> {setBairro(e.target.value)}}
      />
      <br />

      <input type="text" 
      placeholder="cidade" 
      name="cidade"
      value={cidade}
      onChange={(e)=> {setCidade(e.target.value)}}
      />
      <br />
      <input type="text" 
      placeholder="estado" 
      name="estado"
      value={estado}
      onChange={(e)=> {setEstado(e.target.value)}}
      />
      <br />
      <button>Salvar</button>
      </form>
    
    </div>
  );
}

export default App;
