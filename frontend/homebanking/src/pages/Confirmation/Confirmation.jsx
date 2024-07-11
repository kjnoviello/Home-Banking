// import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox'
import './Confirmation.css'

const Confirmation = () => {
    return (
        <main className='confirmation-container'>
            <h3>Cuenta seleccionada </h3>
            <ConfirmationBox
                icon=""
                iconAlt=""
                amount="$30000"
                origin="true"
            />
            <h3>Valor a enviar</h3>
            <ConfirmationBox 
                icon="/icons/credit_card.png"
                amount="$2000"
            />
            <h3>Destinatario</h3>
            <ConfirmationBox 
                icon="/icons/user_destination.png"
                amount="Adrian Ferrero"/>
            <h3>Concepto (opcional)</h3>
            <ConfirmationBox 
                icon="/icons/checkbook.png"
                amount="Alquiler"/>
            <Link to="/ticket">
                <Button
                    title="Confirmar"
                />
            </Link>
        </main>
    )
}

export default Confirmation