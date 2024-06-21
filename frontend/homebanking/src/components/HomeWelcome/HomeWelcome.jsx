// import React from 'react'
import HomeBalance from '../HomeBalance/HomeBalance'
import HomeOptions from '../HomeOptions/HomeOptions'
import NavHeader from '../NavHeader/NavHeader'
import './HomeWelcome.css'

const HomeWelcome = () => {


    return (
        <main className='home-container'>
            <NavHeader user="Bienvenido, José" classHome="true"></NavHeader>
            <HomeBalance number="70000.00"></HomeBalance>
            <div className='homeOptions-Container'>
                <HomeOptions icon="/icons/add_card.png" label="Agregar Saldo" route="/notfound"></HomeOptions>
                <HomeOptions icon="/icons/transfer.png" label="Transferir" route="/notfound"></HomeOptions>
                <HomeOptions icon="/icons/rest_card.png" label="Sacar Saldo" route="/notfound"></HomeOptions>
            </div>
        </main>
    )
}

export default HomeWelcome