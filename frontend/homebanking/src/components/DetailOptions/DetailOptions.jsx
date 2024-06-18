// import React from 'react'
import './DetailOptions.css'

const DetailOptions = () => {
    return (
        <div className="detail-options">
            <div className="detail-options__item">
                <button className="detail-options__button">
                    <img src="./icons/share.png" alt="compartir" className="detail-options__image" />
                </button>
            </div>
            <div className="detail-options__item">
                <button className="detail-options__button">
                    <img src="./icons/keep.png" alt="pin" className="detail-options__image" />
                </button>
            </div>
            <div className="detail-options__item">
                <button className="detail-options__button">
                    <img src="./icons/360.png" alt="360" className="detail-options__image" />
                </button>
            </div>
        </div>
    )
}

export default DetailOptions;

