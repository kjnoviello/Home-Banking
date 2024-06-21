// import React from 'react'

import Card from "../../components/Card/Card"
import ConfigCards from "../../components/ConfigCards/ConfigCards"
import './Tarjetas.css'

const Tarjetas = () => {
    return (
        <main className="tajetas__container">
            <Card cardTitle='Tarjeta Física' cardBalance='$40000' cardNumber='358 258 253 xxx' cardExpiry='06/25'></Card>
            <Card cardTitle='Tarjeta Virtual' cardBalance='$30000' cardNumber='458 788 120 xxx' cardExpiry='03/25'></Card>
            <h4 className="tarjetas__title">Configuración de tarjetas</h4>
            <ConfigCards configCardsTitle='Pago Contactless'></ConfigCards>
            <ConfigCards configCardsTitle='Pago Online'></ConfigCards>
            {/* Espacio vacio para que se vea el navbar... se puede borrar */}
            <div className="empty"></div>
        </main>
    )
}

export default Tarjetas