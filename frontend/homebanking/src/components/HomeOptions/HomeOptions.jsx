/* eslint-disable react/prop-types */
// import React from 'react'
import '../DetailOptions/DetailOptions.css'
import '../Card/Card.css'
import './HomeOptions.css'
import { Link } from 'react-router-dom'

const HomeOptions = ({icon, label, route}) => {
    return (
        <div className="detail-options__item home-options__item">
            <Link to={route}>
                <button className="detail-options__button home-options__button">
                    <img src={icon} className="detail-options__image" />
                </button>
            </Link>
            <p className="card__number">{label}</p>
        </div>
    )
}

export default HomeOptions