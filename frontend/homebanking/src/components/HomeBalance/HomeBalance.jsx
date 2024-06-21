// import React from 'react'
import '../Card/Card.css'
import './HomeBalance.css'

const HomeBalance = () => {
    return (
        <div className="card home-balance__container">
            <h6 className="card__title">Saldo Disponible</h6>
            <div className="card__details">
                <p className="card__balance">$70000.00</p>

                {/* FALTA HACER QUE SE OCULTE EL BALANCE */}

                <img src="/icons/trailing.png" alt="visible" />
            </div>
        </div>
    )
}

export default HomeBalance