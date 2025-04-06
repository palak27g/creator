import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import gImage from './assets/image 9.png';  
import mImage from './assets/image 8.png'; 
import cImage from './assets/image 6.png';  
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login success for now
        if (email) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo">
                <div className="cImage"></div>
                <img 
  src={cImage} 
  alt="Sample QR Code" 
></img> </div>
                <h2>Login to Creator</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Continue
                    </Button>
                </form>
                <div className="login-options">
                    <p>OR</p>
                    <Button 
    variant="outlined" 
    color="primary" 
    fullWidth 
    className="login-option-button"
>
    <img 
        src={gImage} 
        alt="Google Logo" 
        style={{ width: '24px', height: '24px', marginRight: '8px' }} 
    />
    Continue with Google
</Button>
<Button 
    variant="outlined" 
    color="primary" 
    fullWidth 
    className="login-option-button"
>
    <img 
        src={mImage} 
        alt="Microsoft Logo" 
        style={{ width: '24px', height: '24px', marginRight: '8px' }} 
    />
    Continue with Microsoft
</Button>


                </div>
            </div>
        </div>
    );
};

export default LoginPage;


