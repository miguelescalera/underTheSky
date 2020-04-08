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


  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false)

  return (
    <Container style={{ justifyContent: "center" }}>
      <>
        <Button
          className="boton-outline"
          onClick={() => setOpen(!open)}
          aria-controls="formularioEntrega"
          aria-expanded={open}
        >
          Envio a Domicilio
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
      </>

      <>
        <Button
          className="boton-outline"
          onClick={() => setCount(!count)}
          aria-controls="PuntoDeEncuentro"
          aria-expanded={count}
        >
          Puntos De Encuentro
        </Button>
        <Collapse in={count}>
          <div id="PuntoDeEncuentro">
            
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="https://destinosturisticos.hiperarticulos.com/wp-content/uploads/2014/05/lugares-tur%C3%ADsticos-de-Argentina-3.jpg" />
              <Card.Body>
                <Card.Title>Obelisto</Card.Title>
                <Card.Text>

              <a href="javascript:window.open('https://www.google.com/maps/place/Carlos+Pellegrini+400,+C1035+CABA,+Argentina/@-34.6037558,-58.3831455,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccacf19e1c387:0x76463c3144cdb09a!8m2!3d-34.6037602!4d-58.3809568','','toolbar=yes');void 0"> Carlos Pellegrini 400, C1035 CABA, Argentina</a>

                </Card.Text>
                <Button  type="submit" variant="primary" onclick={handleEncuentro}>Seleccionar Punto</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipNGqmgcbuFqm7iMjqCc5pYNF61pgkbDwArCZ_zp=w408-h276-k-no" />
              <Card.Body>
                <Card.Title>Hipódromo de Palermo</Card.Title>
                <Card.Text>

              <a href="javascript:window.open('https://www.google.com/maps/place/Av.+del+Libertador+4101,+Buenos+Aires,+Argentina/@-34.5694302,-58.4284819,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5a28d3a80cf:0x2fdeabf59282a490!8m2!3d-34.5694346!4d-58.4262932');void 0"> Av. del Libertador 4101, C1426 CABA, Argentina </a>

                </Card.Text>
                <Button type="submit"  variant="primary" onclick={handleEncuentro} >Seleccionar Punto</Button>
              </Card.Body>
            </Card>

          </div>
        </Collapse>
      </>
    </Container>
  );
};
