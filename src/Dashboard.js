import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import ccImage from './assets/image 6.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserPlus,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
    const [qrDropdownOpen, setQrDropdownOpen] = useState(false); // State for QR Codes dropdown
    const [helpDropdownOpen, setHelpDropdownOpen] = useState(false); // State for Help dropdown

    const toggleQrDropdown = () => {
        setQrDropdownOpen(!qrDropdownOpen); // Toggle QR Codes dropdown
    };

    const toggleHelpDropdown = () => {
        setHelpDropdownOpen(!helpDropdownOpen); // Toggle Help dropdown
    };

    return (
        <div className="dashboard">
            {/* Navbar */}
            <nav className="dashboard-navbar">
                <div className="navbar-logo">
                    <img src={ccImage} alt="Sample QR Code" />
                    CREATOR
                </div>
                <nav className="dashboard-navbar">
    
    <ul className="nav-links">
        <li><a href="#qr-codes">QR Codes</a></li>
        <li><a href="#digital-cards">Cards (Coming Soon)</a></li>
    </ul>
    <div className="navbar-icons">
        <a style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faBell} /></a>
        <a style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faUserPlus} /></a>
        <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
            Get More Codes
        </Button>
    </div>
</nav>

                
            </nav>

            {/* Body */}
            <div className="dashboard-body">
                {/* Sidebar */}
                <aside className="dashboard-sidebar">
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li onClick={toggleQrDropdown} className="dropdown-toggle">
                            QR Codes <FontAwesomeIcon icon={ faChevronDown} />
                        </li>
                        {qrDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="#create-qr">Create QR Code</a></li>
                                <li><a href="#my-qr-codes">My QR Codes</a></li>
                                <li><a href="#analytics">Analytics</a></li>
                                <li><a href="#templates">Templates</a></li>
                            </ul>
                        )}
                        <li onClick={toggleHelpDropdown} className="dropdown-toggle">
                            Help  <FontAwesomeIcon icon={ faChevronDown} />
                        </li>
                        {helpDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="#blogs">Blogs</a></li>
                                <li><a href="#support">Support</a></li>
                                <li><a href="#chat">Chat with Us</a></li>
                            </ul>
                        )}
                    </ul>
                    <div className="upgrade-now-box">
                        <Button variant="contained" className="upgrade-now-button">Upgrade Now</Button>
                    </div>
                </aside>

                {/* Main Section */}
                <main className="dashboard-main">
                    <h2>Account Settings</h2>
                    <form className="account-settings-form">
                        {/* All fields in the same column */}
                        <div className="form-column">
                            <TextField label="First Name" defaultValue="Saket" variant="outlined" fullWidth />
                            <TextField label="Last Name" defaultValue="Sinha" variant="outlined" fullWidth />
                            <TextField label="Date Joined" defaultValue="August 2021" variant="outlined" fullWidth />
                            <TextField label="Role" defaultValue="Admin" variant="outlined" fullWidth />
                            <TextField label="Timezone" defaultValue="IST (India Standard Time)" variant="outlined" fullWidth />
                            <TextField label="Phone Number" defaultValue="+91-7080125777" variant="outlined" fullWidth />
                            
                            {/* Email field with change text */}
                            <div className="email-field">
                                <TextField label="Email" defaultValue="sinhasaket13@gmail.com" variant="outlined" fullWidth />
                                <p className="change-text">Change Email</p>
                            </div>

                            {/* Password field with change text */}
                            <div className="password-field">
                                <TextField label="Password" defaultValue="**********" type="password" variant="outlined" fullWidth />
                                <p className="change-text">Change Password</p>
                            </div>
                            
                            {/* Phone Number field with change text */}
                            <div className="phone-field">
                                <TextField label="Phone Number" defaultValue="+91-7080125777" variant="outlined" fullWidth />
                                <p className="change-text">Change Phone Number</p>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
