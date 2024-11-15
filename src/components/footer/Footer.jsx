import React, { useState } from 'react';
import './style.css';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {

    return (
        <div className='footer-main'>
            <div className='footer'>
                <div className='footer-in'>
                    <div className='contact-area'>
                        <h1>Our Community</h1>
                        <p>Here you'll find regular market updates, expert tips & stories.</p>
                        <form className='news-letter'>
                            <input type='email' placeholder='Email address...' className='news-letter-input no-focus-highlight' required />
                            <button className='news-letter-button pointer'>
                                <SendIcon sx={{ transform: 'rotate(-45deg)', color: '#fff' }} />
                            </button>
                        </form >
                        <h5>Follow us</h5>
                        <ul className='li-contact'>
                            <li>#image</li>
                            <li>#image</li>
                            <li>#image</li>
                            <li>#image</li>
                        </ul>
                    </div>

                    <div className='links-area'>
                        <h1>Useful Links</h1>
                        <div className='linkers'>
                            <ul className='linkers-link'>
                                <li className='pointer spacing highlight'>About Us</li>
                                <li className='pointer spacing highlight'>Meet Our team</li>
                                <li className='pointer spacing highlight'>Our Accounts</li>
                                <li className='pointer spacing highlight'>Platform</li>
                            </ul>
                            <ul className='linkers-link'>
                                <li className='pointer spacing highlight'>Education</li>
                                <li className='pointer spacing highlight'>History</li>
                                <li className='pointer spacing highlight'>Markets</li>
                                <li className='pointer spacing highlight'>Faq's</li>
                                <li className='pointer spacing highlight'>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className='widget-area'>
                        <h1>Need assistance?</h1>
                        <p>Live chat with our service team for information & assistance.</p>
                        <div className='assistance-bar'>
                            <div className='assistant'>

                            </div>
                            <div className='chat'>
                                <h5>Live Chat With</h5>
                                <span className='chat-button highlight pointer' >
                                    Expert <ArrowForwardIcon className='chatIndicate highlight' />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer-sub'>

                <div className='footer-inner'>
                    <div>© 2023 Bullion. All Rights Reserved.</div>
                    <div>
                        <ul className='li-support'>
                            <li>#image</li>
                            <li>#image</li>
                            <li>#image</li>
                            <li>#image</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;