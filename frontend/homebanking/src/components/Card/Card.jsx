/* eslint-disable react/prop-types */
// import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <article className="card">
            <div className="card__header">
                <h6 className="card__title">{props.cardTitle}</h6>
                <div className='card__logo-container'>
                    <img className="card__logo" src="/icons/card-maestro.png" alt="logo maestro" />
                </div>
            </div>
            <h4 className="card__balance">{props.cardBalance}</h4>
            <div className="card__details">
                <p className="card__number">{props.cardNumber}</p>
                <div className="card__expiry">
                    <p className="card__expiry-label">Vencimiento</p>
                    <p className="card__expiry-date">{props.cardExpiry}</p>
                </div>
            </div>
        </article>
    )
}

export default Card