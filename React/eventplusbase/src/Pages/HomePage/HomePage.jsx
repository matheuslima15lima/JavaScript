import React, { useEffect, useState } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import Banner from '../../components/Banner/Banner';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container'
import './HomePage.css'
const HomePage = () => {

    useEffect(()=> {
        //continuar aqui
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
          title={e.title}
          description={e.descricao}
          eventDate={e.data}
          idEvento={e.id}
      
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