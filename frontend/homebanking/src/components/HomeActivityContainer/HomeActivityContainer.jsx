// import React from 'react'
import HomeActivity from "../HomeActivity/HomeActivity";
import "../Card/Card.css";
import "./HomeActivityContainer.css";

const HomeActivityContainer = () => {
  return (
    <div className="card home-activity__container">
      <div className="card__header">
        <h6 className="card__title home-activity__title">
          Tu última actividad
        </h6>
        <div className="home-activity__item card__number">
          <p>Ver todo</p>
          <div className="home-activity__imgContainer">
            <img
              src="/icons/arrow_right.png"
              alt="ver más"
              className="home-activity__img"
            />
          </div>
        </div>
      </div>
      <HomeActivity
        icon="/icons/credit_card.png"
        name="Adrián Ferrero"
        date="20 de abril 9:15 hs"
        amount="-$2000"
      />
      <HomeActivity
        icon="/icons/add_card_small.png"
        name="Pablo Loy"
        date="19 de abril 9:00 hs"
        amount="+$1000"
      />
      <HomeActivity
        icon="/icons/add_card_small.png"
        name="Sofía Belén"
        date="17 de abril 12:23 hs"
        amount="+$1500"
      />
    </div>
  );
};

export default HomeActivityContainer;
