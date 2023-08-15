import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import logo from './logo-tm.png';

function Footer() {

    return (
        <footer className="footer">


            <Link to='/' className='foot-logo-container' ><img src={logo} alt="logo de Misiotronica" className='foot-logo' /></Link>
        </footer>
    )
};

export default Footer