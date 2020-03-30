import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default ({ usuarios }) => {
  return usuarios.map(usuario => {
    return (
      <Container style={{ marginBlockStart: "7rem" }}>
        <Card>
          <Card.Title>Usuario N°{usuario.id}</Card.Title>
          <h6>Nombre: {usuario.firstName + " " + usuario.lastName}</h6>
          <h6>Email: {usuario.email}</h6>
          <h6 name="usuario">Status: 
          <DropdownButton id="dropdown-basic-button" title={usuario.type}>
            <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>

          </DropdownButton></h6>
          
        </Card>
      </Container>
    );
  });
};





