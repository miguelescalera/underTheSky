import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default ({
  handleSize,
  handleFrame,
  handleColor,
  sizes,
  frames,
  styles,
  handleClick
}) => {

  

  // crear estado para selected frame 



   
  console.log("sizes", sizes);
  console.log("frames", frames);
  console.log("styles", styles);

  const singleStyle = {
    marginBlockEnd: "5rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  };

  return (
    <div style={singleStyle}>
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      <Container className="d-flex justify-content-center">
        <Card className="singleproduct-card ">
          <Card.Body style={{ padding: "0px" }}>
            <div id="probuild-contenedor">
              <Card.Img
                id="probuild-marco"
                style={{
                  borderRadius: "0px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: 0,
                  border: "none",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(013, 130, 230, 0.5)",
                }}
                variant="top"
                src="https://i.imgur.com/FpllLxM.png"
              />

              <Card.Img
                id="probuild-poster"
                style={{
                  position: "relative",
                  borderRadius: "0px"
                }}
                variant="top"
                src="https://i.imgur.com/A4BIcNR.png"
              />
            </div>
          </Card.Body>
        </Card>
      </Container>
          {/* ver como puede llegar el estilo del cuadro */}

      <h4>Estilo Minimal Hardcode</h4>


      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
      <Container className="d-flex justify-content-center singleproduct-variable">
        <h4>Tamaño</h4>
      </Container>
      <Container className="d-flex justify-content-center">
        {!sizes ? (
          <Spinner animation="border" role="status" variant="light">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            {sizes.map(e => {
              return (
                <ToggleButton
                  value={e.id}
                  className="toggle-outline"
                  onClick={() => handleSize(e.id)}
                  name="13x18"
                >
                  {e.name}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        )}
      </Container>
      {/* <Container className="d-flex justify-content-center">
        <h4>Color</h4>
        {!styles ? <p>cargando</p> : styles.map((e) => {
          return (
            <Button variant="outline-dark" onClick={() => handleColor(e.id)} name="Blue" >{e.color}</Button>
          )
        })}
      </Container> */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
      <Container className="d-flex justify-content-center singleproduct-variable">
        <h4>Marco</h4>
      </Container>
      <Container className="d-flex justify-content-center">
        {!frames ? (
          <Spinner animation="border" role="status" variant="light">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            {frames.map(e => {
              return (
                <ToggleButton
                  value={e.id}
                  className="toggle-outline"
                  onClick={() => handleFrame(e.id)}
                  name="13x18"
                >
                  {e.name}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        )}
      </Container>
      {/* //AQUI ESTA EL PRECIO */}
      {/* //AQUI ESTA EL PRECIO */}
      {/* //AQUI ESTA EL PRECIO */}
      {/* //AQUI ESTA EL PRECIO */}
      {/* //AQUI ESTA EL PRECIO */}
      <Container className="d-flex justify-content-center singleproduct-subtotal">
        <h5>Subtotal: $400</h5> <br />
      </Container>
      {/* //BOTON A SIIGUIENTE PASO */}
      {/* //BOTON A SIIGUIENTE PASO */}
      {/* //BOTON A SIIGUIENTE PASO */}
      {/* //BOTON A SIIGUIENTE PASO */}
      {/* //BOTON A SIIGUIENTE PASO */}
      {/* //BOTON A SIIGUIENTE PASO */}
      <Container
        style={{ paddingBlockStart: "15px" }}
        className="d-flex justify-content-center "
      >
        <Button
          className="boton-outline "
          type="submit"
          size="lg"
          onClick={handleClick}
        >
          Siguiente Paso
        </Button>{" "}
      </Container>
    </div>
  );
};
