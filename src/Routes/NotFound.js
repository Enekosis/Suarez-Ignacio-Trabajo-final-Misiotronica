import React from 'react'
import nfimg from '../Components/notfoundimg.png'

function NotFound() {
    return (
        <div className='NotFound-body'>
            <img className='nfimg' src={nfimg} alt="Error 404 pagina no encontrada" />
        </div>
    )
}

export default NotFound;