import React from "react";
import TarjetaProducto from "./TarjetaProducto";
import Container from "react-bootstrap/Container";


export default ({ products, handleClick }) => {
  const resultTarj = {
    display: "flex",
    flexWrap: "wrap",
    flexGrowth: "2",
    width: "100%",
    maxWidth: "1000px",
    paddingBlockEnd:'5rem',
  };

  const tarj = {
    padding: "3%",

    width: "45%",
    maxWidth: "250px"
  };

  return (
    <div>
      <Container className="d-flex justify-content-center" style={resultTarj}>
        {products.map((product, index) => {
          console.log('HOLA ESTOY MAPEANDO ESTE', product);
          
          return (
            <span key={index} style={tarj}>
              <TarjetaProducto product={product} handleClick={handleClick} />
            </span>
          );
        })}
      </Container>
    </div>
  );
};
