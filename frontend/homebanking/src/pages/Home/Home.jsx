// import React from 'react'
import HomeActivity from '../../components/HomeActivityContainer/HomeActivityContainer'
import HomeOptions from '../../components/HomeOptions/HomeOptions'
import HomeWelcome from '../../components/HomeWelcome/HomeWelcome'
import './Home.css'

const Home = () => {

    return (
        <>
            <HomeWelcome></HomeWelcome>
            <HomeActivity></HomeActivity>
            <div className='homeOptions-Container'>
                <HomeOptions 
                    icon="/icons/heart_card.png" 
                    label="A otras cuentas"
                    route="/ticket">
                </HomeOptions>
                <HomeOptions 
                    icon="/icons/add_card.png" 
                    label="A mis cuentas"
                    route="/tarjetas">
                </HomeOptions>
            </div>
            <div className='empty'></div>
        </>
    )
}

export default Home