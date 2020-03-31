import React, {useState}from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"

export default () => {
    const [open, setOpen] = useState(false);

  return (
    <div style={{marginBlockStart:"3rem"}} >
        <Container style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
        <input type="text"/><Button type="submit" >Buscar</Button>
        </Container>



      <Container style={{marginBlockStart:"2rem"}} >
        <Card>
          <Card.Title>Orden N°001</Card.Title>
          <h6>User: Pepito Grillo </h6> {/* {order.firstName + order.lastName} */}
          <h6>Estado: En Proceso </h6> {/* {order.status} */}  
          {/* agregar un boton para modificar el estado */}
          <h6>Email:pepito@grillo.com</h6> {/* {order.email} */}
          <h6>Direccion: av siempreviva 2222</h6> {/* {order.adress} */}
          <h6>Total:$ 2500 </h6> {/* falta poner el precio total de la orden total */} 
          <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Detalles De La Orden
      </Button>
      <Collapse in={open}>
        <tr style={{flexDirection:"column-reverse"}} >
            <h6>Cuadro: 0032</h6>
            <h6>Momento: 12:32 12/12/12</h6>
            <h6>Lugar: Buenos Aires</h6>
            <h6>Frase: llalalalalalalal</h6>
            <h6>Idioma: Español</h6>
            <h6>Marco: Blanco</h6>
            <h6>Estilo: Minimalista</h6>
            <h6>Tamaño: 13x18</h6>
        </tr>
      </Collapse>
    </>
        </Card>
      </Container>
    </div>
  );
};
