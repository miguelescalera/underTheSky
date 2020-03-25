import React from "react";
import {Button} from 'react-bootstrap'


export default ({handleClick}) => {

    const landingStyle = {
        display : 'flex',
        justifyContent:'center',
        alignItems:'center',
    }

    return (
        <div id='landing' style={landingStyle}>
            <Button onClick={handleClick} variant='dark' > Ver los estilos</Button>
        </div>
    );
}

