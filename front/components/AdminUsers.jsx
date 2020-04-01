import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default ({ usuarios, handleStatus, handleDelete }) => {

  // agregar un sort() para ordenar las ordenes

  return usuarios.map(usuario => {
    return (
      <Container style={{ marginBlockStart: "7rem" }}>
        <Card>
          <Card.Title>Usuario N°{usuario.id}</Card.Title>
          <h6>Nombre: {usuario.firstName + " " + usuario.lastName}</h6>
          <h6>Email: {usuario.email}</h6>
          <h6 name="usuario">
            Status:{" "}
            {usuario.type == "normal" ? (
              <DropdownButton id="dropdown-basic-button" title="Normal">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleStatus("admin", usuario.id)}
                >
                  Admin
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <DropdownButton id="dropdown-basic-button" title="Admin">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleStatus("normal", usuario.id)}
                >
                  Normal
                </Dropdown.Item>
              </DropdownButton>
            )}
          </h6>
          <Button type="submit" onClick={() => handleDelete(usuario.id)} >Eliminar Usuario</Button>
        </Card>
      </Container>
    );
  });
};
