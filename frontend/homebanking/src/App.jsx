import React from 'react';
import './App.css';
import InactivityComponent from './components/Inactivity/InactivityComponent'
import NavBar from "./components/NavBar/NavBar";
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {

  const showAlert = () => {
    
  };

  return (
    <>
      <NavBar />
      <h1>hello world</h1>
      
      {/* Voy cargando los componentes para ir viendo el render */}
      <Input placeholder="Usuario" img="/icons/person.svg"></Input>
      <Input placeholder="Clave Segura" type="password" img="/icons/Vector.svg" iconTrailing="/icons/trailing.svg" showIconTrailing="true"></Input>
      <Button title="Iniciar Sesión"></Button>
          
      <InactivityComponent />
      
    
    </>
  )
}

export default App;
