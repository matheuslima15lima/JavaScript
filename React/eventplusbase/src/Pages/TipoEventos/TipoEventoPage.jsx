import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import "./TipoEventoPage.css";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../Assets/images/images/tipo-evento.svg";
import Container from "../../components/Container/Container";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api from "../../Services/Services";
import TableTp from "./TableTp/TableTp";
import Notification from "../../components/Notification/Notification";

const TipoEventos = () => {
  useEffect(() => {
    async function getTipoEventos() {
      try {
        const retorno = await api.get("/TiposEvento");
        console.log(retorno);
        setTipoEventos(retorno.data);
      } catch (error) {
        console.log("Deu ruim na api");
      }
    }

    getTipoEventos();
  }, []);

  const [notifyUser, setNotifyUser] = useState({});

  const [frmEdit, setFrmEdit] = useState(false);

  const [titulo, setTitulo] = useState("");

  const [tipoEventos, setTipoEventos] = useState([]); //array mocado

  async function handleSubmit(e) {
    //parar o submit do formulario
    e.preventDefault();

    //validar pelo menos 3 caracteres
    if (titulo.trim().length < 3) {
      alert("O Título deve ter no mínimo 3 caracteres");
      return;
    }

    try {
      const retorno = await api.post("/TiposEvento", { titulo: titulo });

      setNotifyUser({
        titleNote: "Título não informado",
        textNote: "Mensagem não informada",
        imgIcon: "default",
        imgAlt: "Icone da ilustração",
        showMessage: false,
        setNotifyUser,
      });
      console.log("CADASTRADO COM SUCESSO");
      console.log(retorno.data);
      setTitulo(""); //limpa a variavel
    } catch (error) {
      console.log("DEU RUIM NA API");
      console.log(error);
    }
  }

  async function handleUpdate(idEvento) {
    try {
      const retorno = await api.put(`/TiposEvento/${idEvento}`);
      const retornoGet = await api.get("/TiposEvento");
      setTipoEventos(retornoGet.data);
    } catch (error) {
      console.log("Deu ruim aqui no delete");
    }
  }
  function editActionAbort() {
    alert("Cancelar a tela de edição de dados");
  }

  function showUpdateForm() {
    alert("Mostrando tela de update");
  }

  async function handleDelete(idEvento) {
    try {
      const deletado = await api.delete(`/TiposEvento/${idEvento}`);
      const retornoGet = await api.get("/TiposEvento");
      setTitulo({ titulo });
    } catch (error) {
      console.log("Deu ruim aqui no delete");
    }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {/* Cadastro de tipo de eventos */}
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Pagina De tipo de eventos"} />
            <ImageIllustrator alterText={"????"} imageRender={eventTypeImage} />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
            >
              {!frmEdit ? (
                <>
                  <Input
                    type={"text"}
                    id={"titulo"}
                    name={"titulo"}
                    placeholder={"Titulo"}
                    required={"required"}
                    value={titulo}
                    manipulationFunction={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />
                  <span>{titulo}</span>

                  <Button
                    type={"submit"}
                    name={"Cadastrar"}
                    id={"cadastrar"}
                    textButton={"Cadastrar"}
                  />

                  <Button
                    type={"submit"}
                    name={"titulo"}
                    id={"titulo"}
                    textButton={"Atualizar"}
                  />
                </>
              ) : (
                <p>Tela de Edição</p>
              )}
              {/*  */}
            </form>
          </div>
        </Container>
      </section>
      {/* LISTAGEM DE TIPO DE EVENTOS */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista Tipo de Eventos"} color="white" />

          <TableTp
            dados={tipoEventos}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default TipoEventos;
