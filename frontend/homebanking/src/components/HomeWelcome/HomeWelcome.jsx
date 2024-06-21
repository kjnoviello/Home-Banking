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
            <HomeOptions></HomeOptions>
        </main>
    )
}

export default HomeWelcome