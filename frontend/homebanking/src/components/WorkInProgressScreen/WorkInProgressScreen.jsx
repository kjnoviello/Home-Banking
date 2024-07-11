import './WorkInProgressScreen.css'; // Estilos CSS para el componente
import Construction from '../../assets/warning.svg';
import Back from '../../assets/back.svg';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const WorkInProgressScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="construction-page">
      {/* Fila 1: Link Atrás */}
      <div className="row">
        <button className="back-button" onClick={() => navigate(-1)}>
            <span className="icon ">
              <img src={Back} alt="Imagen de atencion" className="construction-image" />
            </span> Atrás
        </button>
      </div>
      
      {/* Fila 2: Imagen */}
      <div className="row">
        <img src={Construction} alt="Imagen de construcción" className="construction-image" />
      </div>
      
      {/* Fila 3: Título */}
      <div className="row">
        <h1 className="construction-title">¡Lo sentimos!</h1>
      </div>
      
      {/* Fila 4: Texto */}
      <div className="row">
        <p className="construction-text">Esta página está en construcción.</p>
      </div>
      
      {/* Fila 5: Botón Volver */}
      <div className="row">
        <Link to="/home">
          <Button title="Ir al Home"/>
        </Link>
      </div>
    </div>
  );
};

export default WorkInProgressScreen;

