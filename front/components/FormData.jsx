// ACA VA A IR LA INFORMACION QUE NECESITA EL CLIENTE PARA REALIZAR LOS CUADROS
import React from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";


export default ({ handleChange, handleSubmit,state }) => {


    const formStyle = {
        width: "300px",
        padding: "1rem",
        borderRadius: "0px",

    }
    const divFormStyle = {
        justifyContent: 'center',
        marginBlockEnd: "5rem",
        maxWidth: "400px"

    }





    return (

        <Card className='form-container'>
            <Row>
                <span>
                    <div style={divFormStyle}>
                        <Form style={formStyle} >
                            <Form.Group controlId="formDateContent">
                                <Form.Label>Fecha del Evento</Form.Label>
                                <Form.Control type="text" placeholder="DD/MM/AAAA" onChange={handleChange} name='date' value={state.date} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhrase">
                                <Form.Label>Nombre o Frase</Form.Label>
                                <Form.Control type="text" placeholder="Nombre o Evento" onChange={handleChange} name='name' value={state.name}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Hora del Evento</Form.Label>
                                <Form.Control type="text" placeholder="00:00" onChange={handleChange} name='time' value={state.time}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPlace">
                                <Form.Label>Lugar del Evento</Form.Label>
                                <Form.Control type="text" placeholder="Buenos Aires, Argentina" onChange={handleChange} name='content'value={state.content} />
                            </Form.Group>
                            <Form.Group controlId="formBasicLanguage">
                                <Form.Label>Idioma</Form.Label>
                                <Form.Control type="text" placeholder="Idioma" onChange={handleChange} name='language'value={state.language} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" onChange={handleChange} name='emailClient' value={state.emailClient}/>
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu Email
                                </Form.Text>
                            </Form.Group>

                            <Button onClick={handleSubmit} className="boton-outline" type="submit">
                                Continuar
            </Button>

                        </Form>
                    </div>
                </span>
            </Row>
        </Card>

    );
};
