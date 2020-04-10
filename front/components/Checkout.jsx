import React, { useState} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

export default ({
  PuntoDeEncuentro,
  handleEncuentro,
  handleChange,
  handleSubmit,
  userEmail,
  nameUser,
  lastNameUser
}) => {
  const formStyle = {
    width: "15rem"
  };
 
  console.log("esto es mi puntod de encuentro",PuntoDeEncuentro)
 

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false)

  return (
    <Container>
      <>
        <Button
          className="boton-outline"
          onClick={() => setOpen(!open)}
          aria-controls="formularioEntrega"
          aria-expanded={open}
        >
          Envio a Domicilio
        </Button>


        <Button
          className="boton-outline"
          onClick={() => setCount(!count)}
          aria-controls="PuntoDeEncuentro"
          aria-expanded={count}
        >
          Puntos De Encuentro
        </Button>


        <Collapse in={open}>
          <div id="formularioEntrega">
            <Card className="form-container">
              <h3 className="titulopagina">Dirección de entrega</h3>

              <Form style={formStyle}>
                <Form.Group controlId="formDateContent">
                  <Form.Label>Dirección</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="P. Sherman 42, calle wallaby"
                    name="address"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPlace">
                  <Form.Label>Ciudad</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Ciudad"
                    name="city"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicTime">
                  <Form.Label>Provincia</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Provincia"
                    name="state"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhrase">
                  <Form.Label>Pais </Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Pais"
                    name="country"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicLanguage">
                  <Form.Label>Código Postal</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="1414"
                    name="postCode"
                  />
                </Form.Group>

                <Button
                  onClick={handleSubmit}
                  style={{ marginTop: "1.5rem" }}
                  className="boton-outline"
                  type="submit"
                >
                  Comprar
                </Button>
              </Form>
            </Card>
          </div>
        </Collapse>

        <Collapse in={count}>
          <div id="PuntoDeEncuentro">
   {PuntoDeEncuentro.map(P=>{
     return(
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Title>Lugar: {P.place}</Card.Title>
                <Card.Text>Direccion: {P.address} </Card.Text>
                <Card.Text>Barrio: {P.neighborhood }</Card.Text>
                <Card.Text>Horario De Atencion: {P.Attention }</Card.Text>
                <Button variant="primary" onClick={()=>handleEncuentro(P.id)}>Seleccionar Punto</Button>
              </Card.Body>
            </Card>
     )
      })}
          </div>
        </Collapse>

      </>

    </Container>
  );
};
