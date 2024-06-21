/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react'
import '../Card/Card.css'
import './HomeBalance.css'

const HomeBalance = (props) => {
    const [showTrailing, setShowTrailing] = useState(true);
    
    const handleShowTrailing = ()=> {
        setShowTrailing(!showTrailing)
    }

    return (
        <div className="card home-balance__container">
            <h6 className="card__title">Saldo Disponible</h6>
            <div className="card__details">
                <p className="card__balance">${showTrailing ? props.number : "******"}</p>
                <button className='card__balance-button' onClick={()=>handleShowTrailing()}>
                    {showTrailing ? <img src="/icons/trailing.png" alt="visible" /> :
                    <img src="/icons/trailingOff.png" alt="none visible" />}
                </button>
            </div>
        </div>
    )
}

export default HomeBalance