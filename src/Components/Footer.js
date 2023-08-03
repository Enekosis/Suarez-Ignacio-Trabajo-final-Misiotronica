import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import logo from './logo.png';
import * as FaIcons from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-contenedor">
                <Link to='/' className='foot-logo-container' ><img src={logo} alt="logo de Misiotronica" className='foot-logo' /></Link>
                <p>2023 Misiotronica | Diseñada por <Link to="https://enekosis.github.io" className='f-link'>Suarez Ignacio</Link> |</p>
                <ul className="redes">
                    <li><Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"><FaIcons.FaFacebook className='R-Logos'/></Link></li>
                    <li><Link to="https://www.youtube.com/watch?v=SQoA_wjmE9w"><FaIcons.FaTwitter className='R-Logos' /></Link></li>
                    <li><Link to="https://enekosis.github.io"><FaIcons.FaGlobe className='R-Logos' /></Link></li>
                    <li><Link to="https://www.youtube.com/watch?v=y6120QOlsfU"><FaIcons.FaYoutube className='R-Logos' /></Link></li>
                    <li><Link to="https://www.youtube.com/watch?v=huie2_3Pekg"><FaIcons.FaLinkedin className='R-Logos' /></Link></li>
                </ul>
            </div>
        </footer>
    )};

export default Footer