/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Input.css";

function Input(props) {
    const [iconVisible, setIconVisible] = useState(true);
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [inputType, setInputType] = useState(props.type);

    // Class for search in history page
    const classSearchField = props.classSearchField ? "search-field" : "input-field";
    const classSearchIcon = props.classSearchIcon ? "search-icon" : "input-icon";

    // funcion para que el icono se oculte al hacer click en el input
    const handleFocus = () => {
        setIconVisible(false);
    };

    // funcion para que el icono se muestre al hacer click fuera el input
    const handleBlur = () => {
        setIconVisible(true);
    };

    // funcion para evaluar el input vacio
    const handleInput = (event) => {
        setIsInputEmpty(event.target.value === "");
    };

    // funcion que cambia el type del input
    const togglePasswordVisible = () => {
        setInputType((toogleType) => (toogleType === 'password' ? 'text' : 'password'));
    }

    return (
        <div className="input-container">
            {iconVisible && isInputEmpty && (
                <span className={classSearchIcon}>
                    <img src={props.img} alt="icono de input" />
                </span>
            )}
            <input
                type={inputType}
                placeholder= {props.placeholder}
                className={classSearchField}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInput}
            />
            {(props.showIconTrailing ? 
                (<button type="button" className="input-iconTrailing" onClick={togglePasswordVisible}>
                    {inputType==="password" ? 
                        (<img src={props.iconTrailingOff} alt="icono de visibilidad off" />) 
                        :
                        (<img src={props.iconTrailing} alt="icono de visibilidad " />)
                    }
                </button>) 
                : 
                ("") 
            )}
        </div>
    );
}

export default Input;
