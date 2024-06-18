// import React from 'react'
import DetailConcept from '../../components/DetailConcept/DetailConcept'
import DetailOptions from '../../components/DetailOptions/DetailOptions'
import DetailStatus from '../../components/DetailStatus/DetailStatus'
import DetailTicket from '../../components/DetailTicket/DetailTicket'
import './Ticket.css'

// borrar el div empy y los fragment al hacer que navbar no este en esta pagina

const Ticket = () => {
    return (
        <>
            <main className='ticket__container'>
                <h3 className='ticket__title ticket__content'>Valor enviado a Adrían Ferrero</h3>
                <p className='ticket__value ticket__content'>$2000</p>
                <p className='ticket__date ticket__content'>20 de mayo 2024 - 02:10 PM</p>
                <DetailTicket />
                <DetailConcept />
                <DetailStatus />
                <DetailOptions />
            </main>
            <div className='empty'></div>
        </>
    )
}

export default Ticket