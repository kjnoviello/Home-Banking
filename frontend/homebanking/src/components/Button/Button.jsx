/* eslint-disable react/prop-types */
import './Button.css'

const Button = ({title, onClick, color}) => {
    const colorBtn = color ? "btn-field__login" : "btn-field";

    return (
        <div className='btn-container'>
            <button className="btn-field" id={colorBtn} onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button