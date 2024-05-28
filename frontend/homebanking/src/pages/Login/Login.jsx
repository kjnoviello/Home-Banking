// eslint-disable-next-line no-unused-vars
import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './Login.css'

const Login = () => {
    return (
        <main className="main">
            <h1 className="main__title">Saint Patrick Bank</h1>
            <div className="main__logo-container">
                <img className="main__logo" src="logo01.png" alt="logo del banco" />
            </div>
            <Input placeholder="Usuario" img="/icons/person.png"></Input>
            <Input placeholder="Clave Segura" type="password" img="/icons/Vector.png" iconTrailing="/icons/trailing.png" showIconTrailing="true"></Input>
            <p>¿Ha olvidado su PIN?</p>
            <Button title="Iniciar Sesión"></Button>
        </main>
    )
}

export default Login