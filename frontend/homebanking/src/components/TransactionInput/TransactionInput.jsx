// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './TransactionIpunt.css'

    
const TransactionInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const symbolRef = useRef(null);
    const [placeholder, setPlaceholder] = useState('ej: 10000');

    const handleFocus = () => {
        setPlaceholder('');
    };
    
    useEffect(() => {
        const input = inputRef.current;
        const symbol = symbolRef.current;

        // Se asegura que el valor sea un numero
        const handleInput = () => {
        const newValue = input.value.replace(/[^\d]/g, '');
        setValue(newValue);

        // Calcula el ancho del texto dentro del input
        const textWidth = getTextWidth(newValue, getComputedStyle(input).font);
        symbol.style.right = `${10 + textWidth}px`;
        };

        input.addEventListener('input', handleInput);

        return () => {
        input.removeEventListener('input', handleInput);
        };
    }, []);

    const getTextWidth = (text, font) => {
        // Se crea un canvas temporal
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        return context.measureText(text).width;
    };

    return (
        <div className="transaction__input-container">
                <span ref={symbolRef} className="transaction__input-symbol">$</span>
                    <input
                    ref={inputRef}
                    className="transaction__input"
                    type="text"
                    max={1000000}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => setValue(e.target.value.replace(/[^\d]/g, ''))}
                    onFocus={handleFocus}
                    />
            </div>
    )
}

export default TransactionInput