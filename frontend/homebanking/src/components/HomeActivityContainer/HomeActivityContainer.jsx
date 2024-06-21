// import React from 'react'
import HomeActivity from '../HomeActivity/HomeActivity'
import '../Card/Card.css'
import './HomeActivityContainer.css'

const HomeActivityContainer = () => {
  return (
    <div className='card home-activity__container'>
      <div className='card__header'>
        <h6 className="card__title home-activity__title">Tu última actividad</h6>
        <div className='home-activity__item card__number'>
          <p>Ver todo</p>
          <div className='home-activity__imgContainer'>
            <img src="/icons/arrow_right.png" alt="ver más" className='home-activity__img'/>
          </div>
        </div>
      </div>
      <HomeActivity />
      <HomeActivity />
      <HomeActivity />
      <div className='empty'></div>
    </div>
  )
}

export default HomeActivityContainer