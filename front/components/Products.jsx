
import React from "react";
import TarjetaProducto from "./TarjetaProducto";
import Container from "react-bootstrap/Container"

export default ({ products, handleClick }) => {

  const resultTarj = {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrowth: "2",
    width: "100%",
    maxWidth:'1000px'
  };

  const tarj = {
    padding: '0.5rem',

      width:"40%",
      maxWidth:'250px',

  };
  
  return(
    <Container className="d-flex justify-content-center" style={resultTarj}>
      {products.map(product => {
        return (
          <span style={tarj}>
          <TarjetaProducto product={product} handleClick={handleClick}/>
          </span>
        )
      })}
    </Container>

  )
};
