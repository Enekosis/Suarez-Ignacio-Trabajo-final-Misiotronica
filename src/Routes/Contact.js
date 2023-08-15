import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        alert('¡Datos enviados exitosamente!');
        e.preventDefault();
        setName('');
        setTel('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact-body'>

            <form className='cForm' onSubmit={handleSubmit}>
                <h1 className='cH1'>¡Contactanos!</h1>
                <input className='name formI'
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className='tel  formI'
                    type="text"
                    placeholder="Telefono"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
                <input className='email  formI'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea className='msj  formI'
                    placeholder="Mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className='cSubmit formI' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;