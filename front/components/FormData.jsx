// ACA VA A IR LA INFORMACION QUE NECESITA EL CLIENTE PARA REALIZAR LOS CUADROS
import React from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'



export default ({ 
    handleChange, 
    handleSubmit,
    state,
    PreviousStep,
    date, 
    onChange,
    enableButton
 }) => {


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

    const calendarStyle = {
        backgroundColor: '#fffefb',
        color:'#102f51'
    }





    return (

        <Card style={{border:'none'}} className='form-container'>
            <Row>
                <span>
                    <div style={divFormStyle}>
                        <Form style={formStyle} >
                            <Form.Group controlId="formDateContent">
                                <Form.Label>Fecha del Evento</Form.Label>
                                <Calendar
                                    style={calendarStyle}
                                    onChange={onChange}
                                    className="react-calendar"
                                />

                            </Form.Group>
                            <Form.Group controlId="formBasicPhrase">
                                <Form.Label>Nombre o Frase</Form.Label>
                                <Form.Control type="text" placeholder="Nombre o Evento" onChange={handleChange} name='name' value={state.name}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Hora del Evento</Form.Label>
                                <Form.Control type="time" placeholder="00:00" onChange={handleChange} name='time' value={state.time} />

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
                            {enableButton?<Button onClick={PreviousStep} className="boton-outline" type="submit">
                                atras
                            </Button>:null}
                            
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
