/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Input.css";

function Input(props) {
    const [iconVisible, setIconVisible] = useState(true);
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleFocus = () => {
        setIconVisible(false);
    };

    const handleBlur = () => {
        setIconVisible(true);
    };

    const handleInput = (event) => {
        setIsInputEmpty(event.target.value === "");
    };

    return (
        <div className="input-container">
            {iconVisible && isInputEmpty && (
                <span className="input-icon">
                    <img src={props.img} alt="" />
                </span>
            )}
            <input
                type="text"
                placeholder= {props.placeholder}
                className="input-field"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInput}
            />
        </div>
    );
}

export default Input;
