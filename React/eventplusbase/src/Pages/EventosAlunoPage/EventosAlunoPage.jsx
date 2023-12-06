import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select } from "../../components/FormComponents/FormComponents"
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api from "../../Services/Services";


import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";


const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: "1", text: "Todos os eventos" },
    { value: "2", text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // recupera os dados globais do usuário
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    


      loadEventsType();
  }, [tipoEvento, userData.userId]);

  async function loadEventsType(){
    setShowSpinner(true);
try {
  if (tipoEvento === "1") {//todos os eventos
    const promise = await api.get("/Evento");
    const promiseEventos = await api.get(`/PresencasEvento/ListarMinhas/${userData.userId}`);
    const dadosMarcados = verificaPresenca(promise.data,promiseEventos.data)
    // console.log( promise.data);
  
    console.log("DADOS MARCADOS");
    console.log(dadosMarcados);
    setEventos(promise.data);
  }else{//meus eventos
    let arrEventos = [];
      const promiseEventos = await api.get(`/PresencasEvento/ListarMinhas/${userData.userId}`);
      console.log(promiseEventos.data);
      promiseEventos.data.forEach((element)=>{
        arrEventos.push({...element.evento, 
          situacao : element.situacao,
          idPresencaEvento: element.idPresencaEvento,
        })
      });
      setEventos(arrEventos);
  }
 
} catch (error) {
  console.log("Deu ruim no load");
  console.log(error);
}
 
setShowSpinner(false);
}

  const verificaPresenca = (arrAllEvents, eventUser) =>{
    for (let x = 0; x < arrAllEvents.length; x++) {//para cada evento (todos)
      //verifica se o aluno esta participando do evento atual (x)
     for(let i =0; i<eventUser.length; i++){//verifica em meus eventos
      if(arrAllEvents[x].idEvento === eventUser[i].idEvento){
        arrAllEvents[x].situacao = true;
        arrAllEvents[x].idPresencaEvento = eventUser[i].idPresencaEvento;

        break;
      }
    }
      
    }
    //devolve o array modifiacado
    return arrAllEvents;
  }

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    alert("carregar")
  }
  async function postMyComentary() {
    alert("cadastrar comentario")
  }
  async function comentaryRemove() {
    alert("Remover comentario")
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

 async function handleConnect(idEvent, whatTheFunction) {
    if(whatTheFunction === "connect"){
      
      try {
        const promise = api.post("/PresencaEvento",{
          situacao: true,
          idUsuario: userData.userId,
          idEvento: idEvent,
        });
        if(promise.status === 201) {
          loadEventsType();
          alert("Presença confirmada, parabéns")
        }
      } catch (error) {
        console.log("Erro ao conectar");
        console.log(error);
      }
      return;
    }
    
    //unconnect
    alert("desconectar ao evento" + idEvent);
  }
  return (
    <>
      {/* <Header exibeNavbar={exibeNavbar} setExibeNavbar={setExibeNavbar} /> */}

      <MainContent>
        <Container>
          <Title titleText={"Eventos"} additionalClass="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            dados={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)} // aqui só a variável state
            defaultValue={tipoEvento}
            additionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnGet={loadMyComentary}
          fnPost={postMyComentary}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;