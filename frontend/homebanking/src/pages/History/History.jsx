// import React from 'react'
import HomeActivityContainer from '../../components/HomeActivityContainer/HomeActivityContainer'
import Input from '../../components/Input/Input'
import './History.css'

const History = () => {
    return (
        <div>
            <Input 
                placeholder="Buscar" 
                type="search" 
                img="/icons/lupa.png" 
                classSearchIcon="search-icon"
                classSearchField="search-field"
            />
            <div>
                <h6>Hoy</h6>
            </div>
            <HomeActivityContainer />
        </div>
    )
}

export default History