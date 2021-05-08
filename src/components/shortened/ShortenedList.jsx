import React from 'react'
import ShortenedItem from './ShortenedItem'

const ShortenedList = ({ results }) => {
    return (
        <div className="shortened-list">
            <div className="shortened-list__wrapper">
                {results.map((item, i) => (
                    <ShortenedItem key={item.id + i} {...item} />
                ))}               
            </div>
            
        </div>
    )
}

export default ShortenedList
