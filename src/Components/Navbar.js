import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import 'boxicons'
import {SidebarData} from './SidebarData';
import "../App.css";
import { IconContext } from 'react-icons/lib';
import logo from './logo.png';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: "undefined"}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                </Link>

                <Link to='/' className='nav-logo-container' ><img src={logo} alt="logo de Misiotronica" className='nav-logo' /></Link>

                <div class="search-box">
                        <button className="btn-search"><FaIcons.FaSearch /></button>
                    <input type="text" className="input-search" placeholder="Buscar producto..."></input>
                </div>

                <button className='shopCart'><box-icon name='cart' size="md"></box-icon></button>
                



            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> 
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                        })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
)
}

export default Navbar