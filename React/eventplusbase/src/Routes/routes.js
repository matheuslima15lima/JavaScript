import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import TipoEventos from "../Pages/TipoEventos/TipoEventoPage";
import EventosPage from "../Pages/EventosPage/EventosPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TestePage from "../Pages/TestePage/TestePage";
import Header from "../components/Header/Header";
import Footer from "../Assets/Footer/Footer";
import EventosAlunoPage from "../Pages/EventosAlunoPage/EventosAlunoPage";
import { PrivateRoute } from "./PrivateRoute";

//imports paginas

const Rotas = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route
            element={
              <PrivateRoute redirectTo="/">
                <TipoEventos />
              </PrivateRoute>
            }
            path="/tipo-eventos"
          />

          <Route
            element={
              <PrivateRoute redirectTo="/">
                <EventosPage />
              </PrivateRoute>
            }
            path="/eventos"
          />

          <Route
            element={
              <PrivateRoute redirectTo="/">
                <EventosAlunoPage />
              </PrivateRoute>
            }
            path="/eventos-aluno"
          />

          <Route element={<LoginPage />} path="/login" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
