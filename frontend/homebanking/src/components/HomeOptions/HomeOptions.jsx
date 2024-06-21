// import React from 'react'
import '../DetailOptions/DetailOptions.css'
import '../Card/Card.css'
import './HomeOptions.css'

const HomeOptions = () => {
    return (
        <div className='home-options__container'>
            <div className="detail-options__item home-options__item">
                <button className="detail-options__button home-options__button">
                    <img src="/icons/add_card.png" alt="agregar" className="detail-options__image" />
                </button>
                <p className="card__number">Agregar Saldo</p>
            </div>
            <div className="detail-options__item home-options__item">
                <button className="detail-options__button home-options__button">
                    <img src="/icons/transfer.png" alt="transferir" className="detail-options__image" />
                </button>
                <p className="card__number">Trasferir</p>
            </div>
            <div className="detail-options__item home-options__item">
                <button className="detail-options__button home-options__button">
                    <img src="/icons/rest_card.png" alt="sacar" className="detail-options__image" />
                </button>
                <p className="card__number">Sacar Saldo</p>
            </div>
        </div>
    )
}

export default HomeOptions