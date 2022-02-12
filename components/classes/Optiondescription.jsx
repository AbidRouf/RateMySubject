import React from 'react'

const Optiondescription = ({ title, description }) => {
    return (
        <div className="option__row">
            <h1 className='title'>{title}</h1>
            <h2 className='section__description--para'>{description}</h2>
        </div>

    )
}

export default Optiondescription
