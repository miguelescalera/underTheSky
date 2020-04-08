import React from "react";
import TarjetaProducto from "./TarjetaProducto";
import Container from "react-bootstrap/Container";


export default ({ products, handleClick, styles }) => {
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
  

  // console.log('EEEEHEHH AQUI HACES EL MAP', styles.map((style, index)=>{console.log(style.name, index)}));

  return (
    <div>
      <Container className="d-flex justify-content-center" style={resultTarj}>
        {styles.map((style, index) => {
          return (
            <span key={index} style={tarj}>
              <TarjetaProducto style={style} handleClick={handleClick} />
            </span>
          );
        })}
      </Container>
    </div>
  );
};
         
          
