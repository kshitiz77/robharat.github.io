import React, { useState } from 'react'
import './Footer.css'
import PhoneIcon from '@material-ui/icons/Phone'
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public'
import EmailIcon from '@material-ui/icons/Email'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

function Footer() {
    const [user, setUser] = useState({
        name: " ",
        email: " "
    })
    const handleInput = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }
    const submitData = (event) => {
        event.preventDefault();
        console.log(user)
    }
    return (
        <div className="footer">
            <div className="footer__containerOne">
                <div className="footer__row-2">
                    <div className="footer__para">
                        <p>RO Bharat Is One Of The Trusted & Independent Water Purifier Service Provider In India. At RO Bharat, We Offer A Complete Solution Such As RO Installation, RO Repair, Maintenance And AMC Service For Domestic, Commercial & Industrial Water Purifier. We Deal In All Brands Of Water Purifier At A Relatively Low Price. RO Bharat is a unit of 3D Logic Pvt. Ltd.
                        </p>
                    </div>
                    <div className="footer__socialMedia">
                        <li className="socialMedia__list">
                            <a href="https://www.facebook.com/" target="_blank"> <FacebookIcon className="socialMedia__icon" /> </a>
                        </li>
                        <li className="socialMedia__list">
                            <a href="https://www.instagram.com/" target="_blank"> <InstagramIcon className="socialMedia__icon" /> </a>
                        </li>
                        <li className="socialMedia__list">
                            <a href="https://www.linkedin.com/" target="_blank"> <LinkedInIcon className="socialMedia__icon" /> </a>
                        </li>
                        <li className="socialMedia__list">
                            <a href="https://www.youtube.com/" target="_blank"> <YouTubeIcon className="socialMedia__icon" /> </a>
                        </li>
                        <li className="socialMedia__list">
                            <a href="https://www.twitter.com/" target="_blank"> <TwitterIcon className="socialMedia__icon" /> </a>
                        </li>
                    </div>
                </div>
                <div className="footer__row-2">
                    <div className="footer__about">
                        <h5>Contact Us</h5>
                        <div className="footer__address">
                            <div className="footer__addressDetails">
                                <HomeIcon />
                                <p> <strong>Head Office:</strong> House No. 300, Devkali, Purey Narshingh Bhan, Karanpur, Dist - Pratapgarh (Uttar Pradesh), Pin - 230001 </p>
                            </div>
                            <div className="footer__addressDetails">
                                <PublicIcon />
                                <p>https://www.robharat.com/</p>
                            </div>
                            <div className="footer__addressDetails">
                                <PhoneIcon />
                                <p><a href="tel:+91-0123456789" >+91-0123456789</a></p>
                            </div>
                            <div className="footer__addressDetails">
                                <EmailIcon />
                                <p><a href="email:ouremail@email.com" >ouremail@email.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__containerTwo">
                <div className="footer__row-2">
                    <div className="footer__rights">
                        2021 © All Rights Reserved @ RO  Bharat | Terms & Condition | Privacy Policy | Returns & Refunds Policy | Billing Terms & Conditions | Shipping Policy | Disclaimer
                    </div>
                </div>
                <div className="footer__row-2">
                    <form onSubmit={submitData}>
                        <div className="footer__input">
                            <input id="name" value={user.name} onChange={handleInput} type="text" name="name" placeholder="NAME" />
                            <input id="email" value={user.email} onChange={handleInput} type="email" name="email" placeholder="EMAIL ADDRESS" />
                            <button>SUBSCRIBE</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Footer
