// import React from 'react'
import { Link } from 'react-router-dom'
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox'
import TransactionAcount from '../../components/TransactionAcount/TransactionAcount'
import Button from '../../components/Button/Button'
import './Transaction.css'
import TransactionInput from '../../components/TransactionInput/TransactionInput'
import { useState } from 'react'

const Transaction = () => {
      //!TO DO
    //! HACER QUE EN EL BUSCADOR AL IR INGRESANDO LETRAS VAYA APARECIENDO LOS RESULTADOS FILTRADOS

    const [selectedAcount, setSelectedAcount] = useState(null);

    const handleAcountClick = (acount) => {
        setSelectedAcount(acount);
    };


    return (
        <main className='confirmation-container'>
            <h3>¿A quién y cuanto quieres transferir?</h3>
            <ConfirmationBox
                icon="/icons/user.png"
                amount="Adrian Ferrero"
                transaction="true"
            />
            <TransactionInput />
            <h3>¿Desde donde desea transferir?</h3>

            {/****** ESTO DEBERIA SER UN CAROUSEL ******/}
            <div className='transactionAcount__group'>
                <TransactionAcount
                    acount={selectedAcount === 'principal'}
                    handleAcountClick={() => handleAcountClick("principal")} 
                    typeAcount="Cuenta principal"
                    amount="40000"
                    numberAcount="458 258 253 212"
                />
                <TransactionAcount
                    acount={selectedAcount === "secundaria"}
                    handleAcountClick={() => handleAcountClick("secundaria")} 
                    typeAcount="Cuenta secundaria"
                    amount="55000"
                    numberAcount="458 788 120 230"
                />
            </div>
            <h3>Concepto (opcional)</h3>
            <ConfirmationBox
                icon="/icons/checkbook.png"
                amount="Alquiler"
                transaction="true"
            />
            <Link to="/confirmation">
                <Button
                    title="Continuar"
                />
            </Link>
        </main>
    )
}

export default Transaction

