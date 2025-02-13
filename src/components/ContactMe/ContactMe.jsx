import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import GitHubImg from './../../assets/images/github.png'
import EmailImg from './../../assets/images/email.png'

function ContactMe () {
    return (
        <>
        <section className='contact-container' id="contact">
            <h5> Contact Me</h5>
            <div className='contact-content'>
                <div style={{flex: 1}}>
                    <ContactInfoCard
                    iconURL = {EmailImg}
                    text="elizament@icloud.com"
                    />
                    <ContactInfoCard
                    iconURL = {GitHubImg}
                    text="https://github.com/EFigueroa12"
                    />
                </div>
            </div>
        </section> 
        </>
    )
}

export default ContactMe