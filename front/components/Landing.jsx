import React from "react";
import {Button} from 'react-bootstrap'


export default ({handleClick}) => {

    const landingStyle = {
        display : 'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'fixed',
        backgroundImage: 'url(./src/img/fondo.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '100vh',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    }


    return (
        <div id='landing' style={landingStyle}>
            <Button onClick={handleClick} className="boton-outline" > Todos los estilos</Button>
        </div>
    );
}

