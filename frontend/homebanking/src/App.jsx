import React from 'react';
import './App.css';
import InactivityComponent from './components/Inactivity/InactivityComponent'
import NavBar from "./components/NavBar/NavBar";
import Login from './pages/Login/Login';

function App() {

  const showAlert = () => {
    
  };

  return (
    <>
      {/* Voy cargando los componentes para ir viendo el render */}
      <NavBar />
      
      <Login></Login>
      {/* <InactivityComponent /> */}
    </>
  )
}

export default App;
