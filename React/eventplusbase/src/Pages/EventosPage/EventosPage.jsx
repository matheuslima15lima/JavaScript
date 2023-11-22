import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./EventosPage.css";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import EventImage from "../../Assets/images/images/evento.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import TableEvento from "./TableEv/TableEvento"
import Spinner from "../../components/Spinner/Spinner";
import api from "../../Services/Services";
import Notification from "../../components/Notification/Notification";

const EventosPage = () => {
  useEffect(() => {
    async function getEventos() {
      setShowSpinner(true);
      try {
        const retorno = await api.get("/Evento");
        console.log(retorno.data);
        setEventos(retorno.data)
      } catch (error) {
        console.log("deu ruim a api");
      }
      setShowSpinner(false);
    }
    getEventos(); //tem que chamar a função para que ela funcione
  }, []);

  const [showSpinner, setShowSpinner] = useState(false);
  const [notifyUser, setNotifyUser] = useState({});
  const [idEvento, setIdEvento] = useState(null);
  const [frmEdit, setFrmEdit] = useState(false);
  const [nomeEvento, setNomeEvento] = useState("");
  const [Eventos, setEventos] = useState([]); //array mocado(provavelmente nao vou usar)

  async function handleSubmit(e) {
    e.preventDefault();

    if (nomeEvento.trim().length < 3) {
      alert("o nome do evento deve ter no mínimo 3 caracteres!");
      return;
    }

    try {
      const retorno = await api.post("/Evento", { nomeEvento: nomeEvento });
      setNotifyUser({
        titleNote: "Nome não informado",
        textNote: "Mensagem não encontrada",
        imgIcon: "default",
        imgAlt: "Icone da ilustração",
        showMessage: false,
        setNotifyUser,
      });
      console.log("CADASTRADO COM SUCESSO");
      console.log(retorno.data);
      setNomeEvento("");

      const retornoGet = await api.get("/Evento");
      setEventos(retornoGet.data);
    } catch (error) {
      console.log("DEU RUIM NA API");
      console.log(error);
    }
  }
  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {/* CADASTRO DE EVENTOS */}
      {showSpinner ? <Spinner /> : null}
      <section className="cadastro-evento-section">
            <Container>
            <div className="cadastro-evento__box">
            <Title titleText={"Pagina de Eventos"} />
            <ImageIllustrator alterText={"????"} imageRender={EventImage} />

            <form
              className="ftipo-evento"
              //********SUBMIT AQUI!!!!! ********/
            >
              {/* FRM EDIT AQUI!!!!!! */}
              <>
                <Input
                  type={"text"}
                  id={"nome"}
                  name={"nome"}
                  placeholder={"Digite o nome do evento..."}
                  required={"required"}
                  value={nomeEvento}
                  manipulationFunction={(e)=>{
                    setNomeEvento(e.target.value);
                  }}
                 
                />
                   
                <Input
                    type={"date"}
                    id = {"nome"}
                    name={"data"}
                    placeholder={"digite data"}
                    required={"required"}
                    // value={data}

                />
                <span>{nomeEvento}</span>

                <Button
                  type={"submit"}
                  name={"Cadastrar"}
                  id={"cadastrar"}
                  textButton={"Cadastrar Evento"}
                  // manipulationFunction={handleSubmit}
                />
                </>
                </form>
            </div>
            </Container>
        </section>
      {/*LISTAGEM DE EVENTOS* */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de Eventos"} color="white" />

          <TableEvento
            dados={Eventos}
            // fnUpdate={}
            // fnDelete{}
          />
            </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;
