import React from 'react';
import './App.css';
import InactivityComponent from './components/Inactivity/InactivityComponent';
import NavBar from "./components/NavBar/NavBar";
import Login from './pages/Login/Login';
import NavHeader from './components/NavHeader/NavHeader';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import WorkInProgressScreen from './components/WorkInProgressScreen/WorkInProgressScreen';

function App() {
  const showAlert = () => {
    // Implementación de showAlert
  };

  return (
    <>
      <div className='nav-header__container'>
        <NavHeader />
      </div>
      <Login />
      <InactivityComponent />
      <NavBar />
      <WorkInProgressScreen />
    </>
  );
}

export default App;
