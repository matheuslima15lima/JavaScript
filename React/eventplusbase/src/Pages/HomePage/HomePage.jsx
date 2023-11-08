import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import Banner from '../../components/Banner/Banner';
import VisionSection from '../../components/VisionSection/VisionSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import NextEvent from '../../components/NextEvent/NextEvent';
import Container from '../../components/Container/Container'
import './HomePage.css'
const HomePage = () => {
    return (
      <MainContent>
        <Banner/>
        <section className='proximos-eventos'>
        <Container>

      <div className='events-box'>
      <NextEvent
    title={"Happy hour Event"}
    description={"Evento Legal :)"}
    eventDate={"14/11/23"}
    idEvento={"eufrgref3rh733"}

      />
      <NextEvent
    title={"Happy hour Event"}
    description={"Evento Legal :)"}
    eventDate={"14/11/23"}
    idEvento={"eufrgref3rh733"}

      />
      <NextEvent
    title={"Happy hour Event"}
    description={"Evento Legal :)"}
    eventDate={"14/11/23"}
    idEvento={"eufrgref3rh733"}

      />
      </div>
    
</Container>
        </section>
       
      
        <VisionSection/>
        <ContactSection/>
      </MainContent>

         
        
       
    );
};

export default HomePage;