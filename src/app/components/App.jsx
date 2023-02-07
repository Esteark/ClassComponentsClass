import React from 'react';
import Button from './button/Button.jsx';
import Header from './header/Header.jsx';

const App = () => {

    const listMenu = [
        {
            id: 1,
            name: 'Inicio'
        },
        {
            id: 2,
            name: 'Contacto'
        },
        {
            id: 3,
            name: 'Nosotros'
        },
        {
            id: 3,
            name: 'PQR'
        }
    ]

    const listButton = [
        {
            theme: 'primary',
            text: 'Nuevo cliente'
        },
        {
            theme: 'success',
            text: 'Guardar'
        },
        {
            theme: 'secondary',
            text: 'Reset'
        },
        {
            theme: 'primary',
            text: '✔️'
        }
    ]

    const text = 'Soy un texto de prueba'

    return (
        <>
            <h1>Bienvenidos a React</h1>
            <Header list={listMenu} text={text} />
            <Button theme='success'>Guardar</Button>


            {
            listButton.map((element, index) => (
                <Button theme={element.theme}>{element.text}</Button>
            ))
            }
        </>
    )
}

export default App;