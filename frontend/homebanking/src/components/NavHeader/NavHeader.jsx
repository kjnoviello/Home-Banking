/* eslint-disable react/prop-types */
// import React from 'react'
import './NavHeader.css'
import { useNavigate } from 'react-router-dom';

const NavHeader = ({user, userPic, title, classHome}) => {
    const navigate = useNavigate();

    const navHeaderClass = classHome ? "nav-heaver--home" : "nav-header";
    const titleNavHeader = user ? user : title; 
    const pics = userPic ?  <img src="/icons/arrow_left.png" alt="atrás" className=""/> : <img src="/icons/user.png" alt="atrás" className=""/>

    return (
        <article className={navHeaderClass}>
            <div className="nav-header__left">
                <button onClick={()=>{classHome ? "" : navigate(-1)} } className="nav-header__button ">
                    {pics}
                </button>
                <h3 className="nav-header__title">{titleNavHeader}</h3>
            </div>
            <div className="nav-header__right">
                <button className="nav-header__button nav-header__button--notification">
                    <img src="/icons/notifications.png" alt="notificación" className="nav-header__icon" />
                </button>
                <button className="nav-header__button nav-header__button--help">
                    <img src="/icons/help.png" alt="ayuda" className="nav-header__icon" />
                </button>
            </div>
        </article>
    )
}

export default NavHeader