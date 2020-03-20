import React from 'react'
import {Link} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Alert from "react-bootstrap/Alert"
import Img from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export default () => {


  const formStyle = {
    width: "25%",
    height:'110%',
    padding:"3rem",
    borderRadius: "0px",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',

  }
 
  const divFormStyle ={
    display:"flex",
    justifyContent: 'center',
    marginBlockEnd: "5rem", 
    marginBlockStart: "5rem" 
  }
  return (
    <div  style={divFormStyle}>
      <Card style={formStyle}>
      <h3 className="d-flex justify-content-center" style={{    marginBlockEnd: "1rem" }}>Iniciá sesión</h3>
        <Form  >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              Iniciá sesión con tu email
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"  />
          </Form.Group>
          <Button variant="dark" type="submit" style={{marginBlockStart:'1rem'}} >
            Iniciar Sesión
        </Button>
        <Link to="/register">
              <Form.Text className="text-muted">
                  Aún no tienes cuenta? Registrate.
              </Form.Text>
            </Link>
        </Form>
      </Card>

    </div>
  )
}


