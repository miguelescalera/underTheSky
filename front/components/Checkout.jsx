import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ({
  handleChange,
  handleSubmit,
  userEmail,
  nameUser,
  lastNameUser
}) => {
  const formStyle = {
    width: "15rem"
  };

  return (
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
  );
};
