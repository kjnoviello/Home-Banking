// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import WorkInProgressScreen from '../components/WorkInProgressScreen/WorkInProgressScreen';
import InactivityComponent from '../components/Inactivity/InactivityComponent';
import Ticket from '../pages/Ticket/Ticket';
import Tarjetas from '../pages/Tarjetas/Tarjetas';
import NavHeader from '../components/NavHeader/NavHeader';


const Router = () => {
    return (
        <BrowserRouter>
            <InactivityComponent />
            <Routes>

                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/*' element={<WorkInProgressScreen />} />
                <Route path='/ticket' element={
                        <>
                            <NavHeader 
                                title="Comprobante" 
                                userPic="/public/icons/user"/>
                            <Ticket />
                        </>
                }/>
                <Route path='/tarjetas' element={
                    <>
                        <NavHeader 
                            title="Mis Tarjetas" 
                            userPic="/public/icons/user"/>
                        <Tarjetas />
                    </>
                }/>

            </Routes>

        </BrowserRouter>
    )
}

export {Router};