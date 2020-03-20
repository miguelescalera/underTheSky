import React from "react";
import {Link} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Alert from "react-bootstrap/Alert"

import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import Row from "react-bootstrap/Row";


export default () => {


  const formStyle = {
    width: "300px",
    padding: "1rem",
    borderRadius: "0px",

  }
  const divFormStyle = {
    justifyContent: 'center',
    marginBlockEnd: "5rem",
    marginBlockStart: "5rem",
    maxWidth: "400px"
    
  }

  const containerStyles={
    
    alignItems:'center',
backgroundColor:'rgba(0,0,0,0)',
border: '1px solid rgba(0,0,0,0)'    
  }



  return (

    <Card style={containerStyles}>
      <Row>
 
      <span>
        <div style={divFormStyle}>
          <Form style={formStyle} >
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" name='firstName' />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido"  name='lastName' />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" name='email' />
              <Form.Text className="text-muted">
                Nunca compartiremos tu Email
          </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>
            <Button variant="dark" type="submit">
              Registrar
            </Button>
            <Link to="/login">
              <Form.Text className="text-muted">
                  Ya tienes una cuenta? Ir al login.
              </Form.Text>
            </Link>
          </Form>
        </div>
      </span>
      </Row>
    </Card>

  );
};