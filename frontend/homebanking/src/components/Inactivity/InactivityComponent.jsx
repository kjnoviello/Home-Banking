import { useEffect, useState } from 'react';
import Check from '../../assets/Vector.png';
import Button from '../Button/Button';
import './InactivityComponent.css';
import { Link } from 'react-router-dom';


const InactivityComponent = () => {
  const [showInactivityScreen, setShowInactivityScreen] = useState(false);
  let timeoutId;
  
  const handleInactivity = () => {
    setShowInactivityScreen(true);
  };

  const resetTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleInactivity, 10000) // 10 seg para prueba, en produccion usar 1 o 2 min.
  };

  useEffect(() => {
    resetTimeout();

    const events = ['mousemove', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => window.addEventListener(event, resetTimeout));

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  });

  const handleLogin = () => {
    setShowInactivityScreen(false);
    resetTimeout()
    
    console.log('Volver a iniciar sesión');
        
  };

  return showInactivityScreen ? (
    <div className="inactivity-screen">
      <div className="image-row">
        <img src={Check} alt="sesion_finish" />
        <h2 className="inactivity-title">Sesión finalizada</h2>
      </div>
      <div className="content-row">
        <div className="inactivity-content">
          <div className="inactivity-message">
            <p>Por motivos de seguridad, hemos cerrado sesión de su cuenta.</p>
            <p>Si desea volver a Iniciar sesión, haga click en el botón que se encuentra debajo. Agradecemos su comprensión y colaboración en el cuidado de su privacidad.</p>
          </div>
          <Link to="/login">
            <Button title="Volver a ingresar" onClick={()=>handleLogin()} className="btn-field" />
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default InactivityComponent;

