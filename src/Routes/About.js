import React from 'react'
import aboutImage from '../Components/about-image.jpg'

function About() {
    return (
        <div className='about-body'>
            <div className="aRecuadro">
                <div className="aFrame">
                    <div>
                        <h1 className="aTitle">Sobre Nosotros...</h1>
                        <p className="aParraf">Somos una empresa decidida a brindar el mejor servicio de ventas de productos electrónicos a nivel nacional. Trabajamos con las empresas líderes en el ámbito para ofrecerte los mejores productos a un precio accesible, con envíos a todo el país.</p>
                    </div>
                    <img className='aImage' src={aboutImage} alt="Un escritorio de computadora con 3 monitores, teclado, mouse y auriculares." />
                </div>
            </div>
        </div>
    )
}

export default About;