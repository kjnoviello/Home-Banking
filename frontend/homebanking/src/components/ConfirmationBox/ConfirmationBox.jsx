/* eslint-disable react/prop-types */
// import React from 'react'
import './ConfirmationBox..css'

const ConfirmationBox = ({icon, amount, origin, transaction}) => {
    const transactionClass = transaction ? "confirmationBox" : "card"

    return (
        <article className={transactionClass}>

            {origin ? 
                <div className="card__header confirmationBox__header">
                    <div className='card__logo-container'>
                        <img className="card__logo" src="/icons/heart_card_small.png" alt="logo maestro" />
                    </div>
                    <h6 className="card__number confirmationBox-origin">Cuenta principal</h6>
                </div>
                :
                ""
            }

            <div className="card__details">
                {origin ?
                    ""
                    :
                    <img className="card__logo confirmationBox__logo" src={icon} alt="icono" />
                }
                <p className="card__balance">{amount}</p>
                <div className="card__expiry">
                    <button className='confirmationBox__button'>
                        <img className="card__logo" src="/icons/arrow_right.png" alt="flecha derecha" />
                    </button>
                    <p className="card__expiry-date">cambiar</p>
                </div>
            </div>

        </article>
    )
}

export default ConfirmationBox