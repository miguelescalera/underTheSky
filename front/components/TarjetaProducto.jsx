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




const botonSelecc = {
  fontSize:'0.7rem'
}


  return (
    <div key={product.id} >
      <Card className="tarjetaproducto">
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.imgURL} />
        </Link>
        <Card.Body>
          <Row>
            <Col >
              <Link to={`/products/${product.id}`} >
                <Card.Title className="titulotarjeta"  >{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</Card.Title>
              </Link>
            </Col>
          </Row>

          <Row style={{justifyContent:'center'}}>

            <Col >
              <span >
                <Button className="boton-outline" style={botonSelecc} onClick={() =>
                  handleClick(product.styleId)} >Elegir</Button>
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TarjetaProducto;


