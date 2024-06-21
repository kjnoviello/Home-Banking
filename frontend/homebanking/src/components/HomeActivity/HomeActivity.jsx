/* eslint-disable react/prop-types */
// import React from 'react'
import './HomeActivity.css'

const HomeActivity = ({name, date, amount}) => {
    return (
        <div className="home-activity">
            <div className='home-activity__content'>
                <div className="home-activity__icon">
                    <img src="/icons/credit_card.png" alt="credit card" />
                </div>
                <div className="home-activity__details">
                    <h6 className="home-activity__user">{name}</h6>
                    <p className="home-activity__date">{date}</p>
                </div>
            </div>
            <div className="home-activity__amount">
                <h6 className="home-activity__amount-value">{amount}</h6>
            </div>
        </div>
    );
}

export default HomeActivity