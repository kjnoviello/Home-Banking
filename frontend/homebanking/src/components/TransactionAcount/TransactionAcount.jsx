/* eslint-disable react/prop-types */
// import React from 'react'
import './TransactionAcount.css'

const TransactionAcount = ({typeAcount, amount, numberAcount, handleAcountClick, acount}) => {
    const classAcount = acount ? "transactionAcount__buttonBG" : "transactionAcount__button"

    return (
        <button className={classAcount} onClick={handleAcountClick}>
            <h4 className='card__number'>{typeAcount}</h4>
            <h6 className='card__title'>${amount}</h6>
            <p className='card__expiry-label'>{numberAcount}</p>
        </button>
    )
}

export default TransactionAcount
