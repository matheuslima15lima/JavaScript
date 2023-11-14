import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import "./TipoEventoPage.css";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../Assets/images/images/tipo-evento.svg";
import Container from "../../components/Container/Container";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api from "../../Services/Services"
const TipoEventos = () => {
  const [frmEdit, setFrmEdit] = useState(false);

  const [titulo, setTitulo] = useState("");

  async function handleSubmit(e) {
    
      //parar o submit do formulario
    e.preventDefault();
    
    //validar pelo menos 3 caracteres
    if(titulo.trim().length < 3){
        alert("O Título deve ter no mínimo 3 caracteres")
        return;
    }

    try {
      const retorno = await api.post("/TiposEvento", {titulo: titulo})
      console.log("CADASTRADO COM SUCESSO");
      console.log(retorno.data);
    } catch (error) {
      console.log("DEU RUIM NA API");
      console.log(error);
    }


  }

  function handleUpdate() {
    alert("Bora atualizar");
  }

  return (
    <MainContent>
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Pagina De tipo de eventos"} />
            <ImageIllustrator alterText={"????"} imageRender={eventTypeImage} />

            <form className="ftipo-evento" 
            onSubmit={frmEdit ? handleUpdate : handleSubmit}>
              {!frmEdit ? 
              (

              
                <> 
                <Input
                type={"text"}
                id={"titulo"}
                name={"titulo"}
                placeholder={"Titulo"}
                required={"required"}
                value={titulo}
                manipulationFunction={
                  (e) => {
                    setTitulo(e.target.value)
                  }
                }
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
              )
               :
                (<p>Tela de Edição</p>
                )
                }
              {/*  */}
            </form>
          </div>
        </Container>
      </section>
    </MainContent>
  );
};

export default TipoEventos;
