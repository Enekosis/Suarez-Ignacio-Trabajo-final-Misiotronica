import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Components/hero-image.jpg'
import 'boxicons'

function Home() {
  return (
    <div className='home-body'>
      <div className="hero">
        <div className="contenido">
          <h1 className='home-h1'>Los mejores<br />productos al<br />alcance de un click</h1>
          <p className="home-p">Todos los componentes que necesitas desde <br /> Misiones a toda la Argentina.</p>
          <Link to="tienda" className='button-link'><button className='h-button'>VER PRODUCTOS<box-icon color="white" size='lg' name='right-arrow-alt'></box-icon></button></Link>
        </div>
        <div className="h-image">
          <img className='img1' src={img1} alt="Una plaqueta con circuitos electronicos (imagen generada por ia)" />
        </div>
      </div>
    </div>
  )
}

export default Home;