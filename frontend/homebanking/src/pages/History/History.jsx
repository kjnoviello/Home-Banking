// import React from 'react'
import HomeActivityContainer from '../../components/HomeActivityContainer/HomeActivityContainer'
import Input from '../../components/Input/Input'
import './History.css'

const History = () => {
    return (
        <main >
            <div className='search-container'>
                <Input 
                    placeholder="Buscar" 
                    type="search" 
                    img="/icons/lupa.png" 
                    classSearchIcon="search-icon"
                    classSearchField="search-field"
                />
            </div>
            <div className='search-header'>
                <h6 className='search-title'>Hoy</h6>
                <p className='search-title search-title__color'>Abril</p>
                <img className='search-title' src="/icons/manage_search.png" alt="manage_search" />
            </div>
            <HomeActivityContainer />
        </main>
    )
}

export default History