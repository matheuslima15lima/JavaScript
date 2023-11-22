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
import Spinner from "../../components/Spinner/Spinner";

const TipoEventos = () => {
  useEffect(() => {
    async function getTipoEventos() {
      setShowSpinner(true);
      try {
        const retorno = await api.get("/TiposEvento");
        console.log(retorno);
        setTipoEventos(retorno.data);
      } catch (error) {
        console.log("Deu ruim na api");
      }
      setShowSpinner(false);
    }

    getTipoEventos();
  }, []);


  const [notifyUser, setNotifyUser] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const [idEvento , setIdEvento] = useState(null);//apenas para edição

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

      const retornoGet = await api.get("/TiposEvento");
      setTipoEventos(retornoGet.data);
    } catch (error) {
      console.log("DEU RUIM NA API");
      console.log(error);
    }
  }

  //********** EDITAR CADASTRO */
  async function handleUpdate(e) {
      e.preventDefault();

      try {
        //salvar os dados
        const retorno = await api.put('/TiposEvento/' + idEvento,{
          titulo: titulo
        })
        //atualizar o state (api get )
        const retornoGet = await api.get('/TiposEvento');
        setTipoEventos(retornoGet.data);//atualiza o state da tabela
        alert('atualizado com sucesso')
        //limpar o state do titulo e do idEvento
        editActionAbort();
      } catch (error) {
        alert('problemas com atualização')
      }
   
  }
  function editActionAbort() {
    alert("Cancelar a tela de edição de dados");
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }

  async function showUpdateForm(idElemento) {
    setFrmEdit(true);

    try {
       //criar state para idEvento
       //fazer um get by id para pegar os dados
       const retorno = await api.get('/TiposEvento/' + idElemento)
       //prencher o titulo e o id no state
       setTitulo(retorno.data.titulo);
       setIdEvento(retorno.data.idTipoEvento)
      
      
      
    } catch (error) {
      alert("Não foi possivel mostrar tela de edição")
    }

   
  }


   //********** DELETAR CADASTRO */
  async function handleDelete(idEvento) {
    try {
      const deletado = await api.delete(`/TiposEvento/${idEvento}`);
      const retornoGet = await api.get("/TiposEvento");
      setTipoEventos( retornoGet.data );
    } catch (error) {
      console.log("Deu ruim aqui no delete");
    }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {/* Cadastro de tipo de eventos */}
      {showSpinner ? <Spinner/> : null}
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
                    manipulationFunction={handleSubmit}
                  />

               
                </>
              ) : (
                <>
                <Input
                  id="titulo"
                  placeholder="Titulo"
                  name="titulo"
                  type="text"
                  required="required"
                  value={titulo}
                  manipulationFunction={((e)=>{
                    setTitulo(e.target.value)
                  })}
                />
                <div className="buttons-editbox">
                  <Button
                  textButton="Atualizar"
                  id="atualizar"
                  name="atualizar"
                  type="submit"
                  additionalClass="button-component--middle"
                  />
                  <Button
                  textButton="Cancelar"
                  id="cancelar"
                  name="cancelar"
                  type="button"
                  manipulationFunction={editActionAbort}
                  additionalClass="button-component--middle"
                  />
                </div>
                </>
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
