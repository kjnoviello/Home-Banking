import './App.css';
import InactivityComponent from './components/Inactivity/InactivityComponent';
import NavBar from "./components/NavBar/NavBar";
import Login from './pages/Login/Login';
import NavHeader from './components/NavHeader/NavHeader';
import WorkInProgressScreen from './components/WorkInProgressScreen/WorkInProgressScreen';
import Tarjetas from './pages/Tarjetas/Tarjetas';
import Ticket from './pages/Ticket/Ticket';

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
      <Tarjetas></Tarjetas>
      <Ticket></Ticket>
      <NavBar />
      {/* <WorkInProgressScreen /> */}
    </>
  );
}

export default App;
