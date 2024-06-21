// import './App.css';
// import Router from './router/Router'
// import InactivityComponent from './components/Inactivity/InactivityComponent';
// import NavBar from "./components/NavBar/NavBar";
// import Login from './pages/Login/Login';
// import NavHeader from './components/NavHeader/NavHeader';
// import WorkInProgressScreen from './components/WorkInProgressScreen/WorkInProgressScreen';
// import Tarjetas from './pages/Tarjetas/Tarjetas';
// import Ticket from './pages/Ticket/Ticket';
// import Home from './pages/Home/Home';

// function App() {
//   const showAlert = () => {
//     // Implementación de showAlert
//   };

//   return (
//     <>
//       <div className='nav-header__container'>
//         <NavHeader title="Mi Actividad" userPic="/public/icons/user"/>
//       </div>
//       <Login />
//       <Tarjetas></Tarjetas>
//       <Ticket></Ticket>
//       <Home></Home>
//       {/* <NavBar /> */}
//       {/* <InactivityComponent /> */}
//       {/* <WorkInProgressScreen /> */}
//     </>
//   );
// }

// export default App;




import './App.css';
import {Router} from './router/Router';


function App() {
  const showAlert = () => {
    // Implementación de showAlert
  };

  return (
    <Router />
  );
}

export default App;

