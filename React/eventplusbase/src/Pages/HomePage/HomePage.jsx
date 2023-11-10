import React, { useEffect, useState } from 'react';

import Title from '../../components/Title/Title';
import MainContent from '../../components/MainContent/MainContent';
import Banner from '../../components/Banner/Banner';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container'
import './HomePage.css'
import api from "../../Services/Services";
const HomePage = () => {

    useEffect(()=> {
        //continuar aqui
        async function getProximosEventos(){
          try {
            const promise = await api.get("Evento/ListarProximos");
            setNextEvents(promise.data)
          } catch (error) {
            alert('Deu ruim na api')
          }
        }
        getProximosEventos();
        console.log("A HOME FOI MONTADA!!!");
    } ,[])

    //fake mock - api mocada
    const [nextEvents, setNextEvents] = useState([
      {id: 1, title: "Evento x", descricao:"Evento de SQL Server" ,data:"10/11/2023"},
      {id: 2, title: "Evento y", descricao:"Bora codar JS" ,data:"11/11/2023"}
    ]);

    return (
      <MainContent>
        <Banner/>
        <section className='proximos-eventos'>
        <Container>

      <div className='events-box'>
        {
          nextEvents.map((e)=>
          <NextEvent
          title={e.nomeEvento}
          description={e.descricao}
          eventDate={e.dataEvento}
          idEvento={e.idEvento}
      
            />
          )
        }
   
    
    
      </div>
    
</Container>
        </section>
       
      
        <VisionSection/>
        <ContactSection/>
      </MainContent>

         
        
       
    );
};

export default HomePage;