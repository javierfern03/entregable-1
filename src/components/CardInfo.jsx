import React from 'react'

const CardInfo = ({ quoteRandom }) => {
    return (
        <div>
            <p className='card___quotes'>{quoteRandom.quote}</p>
            <h1 className='card__author'>{quoteRandom.author}</h1>
        </div>
    )
}

export default CardInfo