import React from 'react'
import BtnQuote from './BtnQuote'
import CardInfo from './CardInfo'

const QuoteBox = ({ quoteRandom, handleclick, colorRandom }) => {

    const objStyle = {
        color: colorRandom
    }
    const objStyleBtn = {
        backgroundColor: colorRandom
    }


    return (
        <article >
            <div className='card' style={objStyle}>
                <i className="card__icon fa-solid fa-quote-left"></i>
                <CardInfo quoteRandom={quoteRandom} />
                <BtnQuote objStyleBtn={objStyleBtn} handleclick={handleclick} />
            </div>
        </article>
    )
}

export default QuoteBox