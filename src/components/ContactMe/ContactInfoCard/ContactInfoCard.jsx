import React from 'react'
import './ContactInfoCard.css'

function ContactInfoCard ({ iconURL, text }) {
    return (
        <>
        <div className='contact-details-card'>
            <div className='icon'>
                <img src={iconURL} alt={text} /> 
            </div>
            <p>{text}</p>
        </div>
        </>
    )
}

export default ContactInfoCard