import './App.css';

import Titulo from './components/Titulo/Titulo';

import CardEvento from './components/CardEvento/CardEvento';
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Titulo texto="Eduardo" />
      <Titulo texto="Matheus" />
      <Titulo texto="Carlos" />
      <Titulo texto="Pedro" />
      <br />
      <br />
      <CardEvento
        titulo="C#"
        text="Aprenda c# com o professor Carlos"
        conection="Conectar"


      />

      <CardEvento
       titulo="C#"
       text="Aprenda c# com o professor Carlos"
       conection="Reservar"
      desabilitar = {true}
      
      />


    </div>
  );
}

export default App;
