// import React from 'react'
import '../DetailTicket/DetailTicket.css'
import './DetailConcept.css'

const DetailConcept = () => {
    return (
        <article className='detailContainer'>
            <div className='detailContainer__origin'>
                <p className="card__number">Concepto</p>
            </div>
            <div className='detailContainer__gap'></div>
            <div className='detailContainer__destiny'>
                <p className="card__number">Alquiler</p>
            </div>
        </article>
    )
}

export default DetailConcept