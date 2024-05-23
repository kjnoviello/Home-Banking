/* eslint-disable react/prop-types */
import './Button.css'

const Button = (props) => {
    return (
        <div className='btn-container'>
            <button className='btn-field'>
                {props.title}
             </button>
        </div>
    )
}

export default Button