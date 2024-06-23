// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import WorkInProgressScreen from '../components/WorkInProgressScreen/WorkInProgressScreen';
import InactivityComponent from '../components/Inactivity/InactivityComponent';
import Ticket from '../pages/Ticket/Ticket';
import Tarjetas from '../pages/Tarjetas/Tarjetas';
import NavHeader from '../components/NavHeader/NavHeader';
import Transaction from '../pages/History/History';


const Router = () => {

    //********************** */
    //! AGREGAR SCROLL UP
    //********************** */

    return (
        <BrowserRouter>
            {/* <InactivityComponent /> */}
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
                <Route path='/history' element={
                    <>
                    <NavHeader 
                        title="Mi Actividad" 
                        userPic="/public/icons/user"/>
                    <Transaction />
                </>
                    } />
                
            </Routes>
        </BrowserRouter>
    )
}

export {Router};