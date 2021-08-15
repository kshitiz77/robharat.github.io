import React from 'react'
import "./Contact.css"
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
function Contact() {
    return (
        <div className="contact">
            <div className="contact__optionOne">
                <PhoneIcon />
                <span><a href="tel:+91-0123456789">+91-0123456789</a></span>
            </div>
            <div className="contact__optionTwo">
                <EmailIcon />
                <a href="email: ouremail@email.com ">ouremail@email.com</a>
            </div>
        </div>
    )
}

export default Contact
