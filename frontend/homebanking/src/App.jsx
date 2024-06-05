import React from 'react';
import './App.css';
import InactivityComponent from './components/Inactivity/InactivityComponent'
import NavBar from "./components/NavBar/NavBar";
import Login from './pages/Login/Login';
import NavHeader from './components/NavHeader/NavHeader';


function App() {

  const showAlert = () => {

  };

  return (
    <>
    <div className='nav-header__container'>
      <NavHeader></NavHeader>
    </div>
      <Login></Login>
      {/* <InactivityComponent /> */}
      <NavBar />  
    </>
  )
}

export default App;
