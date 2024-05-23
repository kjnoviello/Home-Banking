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
                type={props.type}
                placeholder= {props.placeholder}
                className="input-field"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInput}
            />

            {props.showIconTrailing ? (
                <button className="input-iconTrailing">
                    <img src={props.iconTrailing} alt="" />
                </button>) 
                : 
                ""}
        </div>
    );
}

export default Input;
