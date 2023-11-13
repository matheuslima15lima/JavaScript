import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import TipoEventos from "./Pages/TipoEventos/TipoEventoPage";
import EventosPage from "./Pages/EventosPage/EventosPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TestePage  from "./Pages/TestePage/TestePage";
import Header from "./components/Header/Header";
import Footer from "./Assets/Footer/Footer";
const Rotas = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<TipoEventos />} path="/tipo-eventos" />
          <Route element={<EventosPage />} path="/eventos" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<TestePage />} path="/teste" />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
