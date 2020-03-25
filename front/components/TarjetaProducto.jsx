//producto individual de la lista de productos general 
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// importando iconos de las librerias
//AQUI IRIA ALGUN ICONO


// importando componentes de react-bootstrap para la grilla
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TarjetaProducto = function ({ product, handleClick }) {


  const card = {
    width:"100%",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
    borderRadius: "0px",
  }

  const name = {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    overflowY : 'hidden',

  }


  
  return (
    <div key={product.id} >
      <Card style={ card }>
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.imgURL} />
        </Link>
        <Card.Body>
          <Row>
            <Col >
              <Link to={`/products/${product.id}`} >
                <Card.Title style={name}>{product.name}</Card.Title>
              </Link>
            </Col>
          </Row>
         
          <Row>

            <Col md={3} style={{height:"3rem"}}>
              <span>
              <Button variant="dark" onClick={() => 
                handleClick()} >Seleccionar</Button>
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TarjetaProducto;


