import React from 'react'

const BtnQuote = ({ objStyleBtn, handleclick }) => {
    return (
        <button className='card__btn' style={objStyleBtn} onClick={handleclick}>&gt;</button>
    )
}

export default BtnQuote