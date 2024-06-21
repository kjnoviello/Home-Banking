/* eslint-disable react/prop-types */
// import React from 'react'
import '../Card/Card.css'
import './ConfigCards.css'

const ConfigCards = (props) => {
    return (
        <div className="configCards">
            <div className="card__header">
                <h6 className="configCards__title">{props.configCardsTitle}</h6>
                <div className='card__logo-container'>
                    <label className="switchBtn">
                        <input type="checkbox"/>
                        <div className="slide round"></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ConfigCards