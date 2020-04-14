import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Switch from "react-switch";
import Image from 'react-bootstrap/Image';
export default ({
  handleSize,
  handleFrame,
  handleColor,
  sizes,
  frames,
  styles,
  handleClick,
  digital,
  handleDigital,
  selectedStyle,
  selectedFrame,
  toggleDefault
}) => {
  const singleStyle = {
    marginBlockEnd: "5rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  };

  const toggleDigital = () => {
    if (digital) {
      return {
        display: "none",
      };
    }
  };

  
  const imgurlPoster = selectedStyle.imgPath.toString().split("/public")[1];

  console.log('PRERETURN SELECTED FRAMEEEEEEEEEE',selectedFrame);
  
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
                    zIndex: 4,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                  variant="top"
                  src={selectedFrame.imgPath.slice(7)}
                />
              

              <Card.Img
                id="probuild-poster"
                style={{
                  zIndex: 1,
                  position: "relative",
                  borderRadius: "0px",
                }}
                variant="top"
                src={imgurlPoster}
              />
            </div>
          </Card.Body>
        </Card>
      </Container>

      <h4>{selectedStyle.name}</h4>

      <label style={{ color: "white" }}>
        ¿quieres el producto en formato digital?
        <span>
          <Switch onChange={handleDigital} checked={digital} />
        </span>
      </label>

      {/* ver como puede llegar el estilo del cuadro */}

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
            {sizes.map((e) => {
              return (
                <ToggleButton
                  value={e.id}
                  className="toggle-outline"
                  onClick={() => handleSize(e)}
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
      <div style={toggleDigital()}>
        <Container className="d-flex justify-content-center singleproduct-variable">
          <h4>Marco</h4>
        </Container>

        <Container className="d-flex justify-content-center">
          {!frames ? (
            <Spinner animation="border" role="status" variant="light">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <ToggleButtonGroup type="radio" name="options" defaultValue={0} value={toggleDefault}>
              {frames.map((e) => {
                return (
                  <ToggleButton
                    value={e.id}
                    className="toggle-outline"
                    onClick={() => handleFrame(e)}
                    name="13x18"
                  >
                    {e.name}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          )}
        </Container>
      </div>


     

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
