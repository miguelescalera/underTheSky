import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default ({ usuarios, handleStatus }) => {
  console.log("estoy en usuario",usuarios)
const returnUsuarios=()=>{
  if(!usuarios.id){
    return <h3>cargando usuarios</h3>
  }else{
    console.log("estoy en el else",usuarios)
    const UserNormal =(
      <DropdownButton id="dropdown-basic-button" title="Normal">
      <Dropdown.Item href="#/action-1" onClick={()=>handleStatus("Admin",usuario.id)} >Admin</Dropdown.Item>
    </DropdownButton>
     )
     const UserAdmin =(
      <DropdownButton id="dropdown-basic-button" title="Admin">
      <Dropdown.Item href="#/action-1" onClick={()=>handleStatus("Normal",usuario.id)} >Normal</Dropdown.Item>
    </DropdownButton>
     )

    return usuarios.map(usuario => {
      return (
        <Container style={{ marginBlockStart: "7rem" }}>
          <Card>
            <Card.Title>Usuario N°{usuario.id}</Card.Title>
            <h6>Nombre: {usuario.firstName + " " + usuario.lastName}</h6>
            <h6>Email: {usuario.email}</h6>
            <h6 name="usuario">Status: {(usuario.type== "normal")? UserNormal : UserAdmin}</h6>
          </Card>
        </Container>
      );
    });    
  }
}
 return(
   returnUsuarios()
 )
  
};
