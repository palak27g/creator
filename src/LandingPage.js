// landingpage.js
// ... rest of your JavaScript code ...
// LandingPage.js
// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AiOutlineQrcode } from 'react-icons/ai'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import heroImage from './assets/imagee.png'; 
import heroiImage from './assets/image 6.png'; 
import './LandingPage.css';





const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="logo"></div>
                
                <div className="heroi-image"></div>
                <img 
  src={heroiImage} 
  alt="Sample QR Code" 
></img>
                <ul className="nav-links">
                    <li> <a href="#qr-codes">QR Codes <FontAwesomeIcon icon={ faChevronDown} /></a></li>
                    <li><a href="#digital-cards">Digital Business Cards<FontAwesomeIcon icon={ faChevronDown} /></a></li>
                    <li><a href="#solution">Solution <FontAwesomeIcon icon={ faChevronDown}/></a></li>
                    <li><a href="#learn">Learn<FontAwesomeIcon icon={ faChevronDown}/></a></li>
                    <li><a href="#pricing">Pricing<FontAwesomeIcon icon={ faChevronDown}/></a></li>
                    <li><a href="#demo">Demo<FontAwesomeIcon icon={ faChevronDown} /></a></li>
                    </ul>
                    <ul classname="navs">
                    <Button variant="contained" color="warning" onClick={() => navigate('/signup')}>Start Free Trial</Button>
                    <Button variant="text" color="primary" onClick={() => navigate('/login')}>Login</Button>
                </ul>
               
            </nav>

            <section className="hero-section">
                <div className="hero-text">
                    <h1>Leading Secure QR Codes & Digital Business Cards</h1>
                    <h2>For Effortless Contact and Link Sharing</h2>
                    <p>Drive Boost conversions from offline touchpoints using intelligent QR solutions.</p>
                    <p>Seamlessly design, manage, and monitor campaigns through a unified platform.</p>
                    <div className="hero-buttons">
                        <Button variant="contained" color="primary" onClick={() => navigate('/signup')}>Start 14-Day Free Trial</Button>
                        <Button variant="outlined" color="primary" onClick={() => navigate('/pricing')}>View Pricing</Button>
                    </div>
                </div>
                <div  className="hero-image">
                <img 
  src={heroImage} 
  alt="Sample QR Code" 
/>

                </div>
            </section>
        </div>
    );
};

export default LandingPage;
