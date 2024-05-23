import React, { useEffect, useState } from 'react';
import './InactivityComponent.css';
import Check from '../../assets/Vector.png';
import Button from '../Button/Button';


const InactivityComponent = () => {
  const [showInactivityScreen, setShowInactivityScreen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleInactivity = () => {
      setShowInactivityScreen(true);
    };

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      setTimeoutId(setTimeout(handleInactivity, 10000)); // 5 minutos (300000 ms)
    };

    resetTimeout();

    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, [timeoutId]);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para volver a iniciar sesión
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
          <p> Por motivos de seguridad, hemos cerrado sesión de su cuenta. </p>
          <p> Si desea volver a Iniciar sesión, haga click en el botón que se encuentra debajo. Agradecemos su comprensión y colaboración en el cuidado de su privacidad.  </p>
        </div>
        
          <Button title="Volver a ingresar" onClick={handleLogin} className="btn-field" />
        
        </div>
        
      </div>
      
    </div>
  ) : null;
};

export default InactivityComponent;