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
      <Login></Login>
      <InactivityComponent />
      <NavBar />  
    </>
  )
}

export default App;
