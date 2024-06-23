// eslint-disable-next-line no-unused-vars
import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {


    return (
        <main className="main">
            <h1 className="main__title">Saint Patrick Bank</h1>
            <div className="main__logo-container">
                <img className="main__logo" src="logo01.png" alt="logo del banco" />
            </div>
            <span className='main__title-user'>Bienvenido, José</span>
            <Input 
                placeholder="Usuario" 
                img="/icons/person.png">
            </Input>
            <Input 
                placeholder="Clave Segura" 
                type="password" 
                img="/icons/lock.png" 
                iconTrailing="/icons/trailing.png" 
                iconTrailingOff="/icons/trailingOff.png" 
                showIconTrailing="true">
            </Input>
            <p className='main__forgot-pin'>¿Ha olvidado su PIN?</p>
            <Link to="/home">
                <Button color="true" title="Iniciar Sesión"></Button>
            </Link>
            <div className='empty'></div>
            <span className='main__help'>¿Necesita ayuda? </span> 
            <div className='empty'></div>
        </main>
    )
}

export default Login