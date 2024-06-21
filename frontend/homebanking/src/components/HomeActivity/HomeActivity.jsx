// import React from 'react'
import './HomeActivity.css'

const HomeActivity = () => {
    return (
        <div className="home-activity">
            <div className='home-activity__content'>
                <div className="home-activity__icon">
                    <img src="/icons/credit_card.png" alt="credit card" />
                </div>
                <div className="home-activity__details">
                    <h6 className="home-activity__user">Adrian Ferrero</h6>
                    <p className="home-activity__date">20 de abril 9:15 hs</p>
                </div>
            </div>
            <div className="home-activity__amount">
                <h6 className="home-activity__amount-value">+$2000</h6>
            </div>
        </div>
    );
}

export default HomeActivity