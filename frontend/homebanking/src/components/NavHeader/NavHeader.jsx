import React from 'react'
import './NavHeader.css'

const NavHeader = () => {
    return (
        <article className="nav-header">
            <div className="nav-header__left">
                <button className="nav-header__button nav-header__button--back">
                    <img src="/icons/back.png" alt="atrás" className="nav-header__icon" />
                </button>
                <h3 className="nav-header__title">Mi Actividad</h3>
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