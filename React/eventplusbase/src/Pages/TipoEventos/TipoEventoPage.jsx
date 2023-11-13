import React from "react";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import MainContent from "../../components/MainContent/MainContent";
import "./TipoEventoPage.css";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../Assets/images/images/tipo-evento.svg";
import Container from "../../components/Container/Container";
import { Input } from "../../components/FormComponents/FormComponents";
const TipoEventos = () => {
  return (
    <MainContent>
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Pagina De tipo de eventos"} />
            <ImageIllustrator alterText={"????"} imageRender={eventTypeImage} />
            {/* continuar here!!! */}
            <form action=""> 
              <p>Componente de formulário</p>
              <Input type={"number"} 
              required={"required"} 
              /> 
            </form>
          </div>
        </Container>
      </section>
    </MainContent>
  );
};

export default TipoEventos;
