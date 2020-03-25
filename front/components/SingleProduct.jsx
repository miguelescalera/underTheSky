import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";




export default ({ handleSize,
  handleFrame,
  handleColor,
  sizes,
  frames,
  styles,
  handleClick
}) => {



  console.log("sizes", sizes)
  console.log("frames", frames)
  console.log("styles", styles)

  const singleStyle = {
    marginBlockStart: '15vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
  }

  const item = {
    margin: "5px"
  }
  return (



    <div style={singleStyle}>
      <Container className="d-flex justify-content-center">
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Title>Product</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/oDx7xxC.png"
            />
          </Card.Body>
          <Card.Header>Estilo del cuadro </Card.Header>{" "}{/* ver como puede llegar el estilo del cuadro */}
        </Card>
      </Container>

      <Container className="d-flex justify-content-center">
        <h4 style={item}>Tamaño</h4>
        {!sizes ? <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
        : sizes.map((e) => {
          return (
            <Button style={item} variant="outline-dark" onClick={() => handleSize(e.id)} name="13x18" >{e.name}</Button>
          )
        })}
      </Container>

      {/* <Container className="d-flex justify-content-center">
        <h4>Color</h4>
        {!styles ? <p>cargando</p> : styles.map((e) => {
          return (
            <Button variant="outline-dark" onClick={() => handleColor(e.id)} name="Blue" >{e.color}</Button>
          )
        })}
      </Container> */}

      <Container className="d-flex justify-content-center">
        <h4 style={item}>Marco</h4>
        {!frames ? <p>cargando</p> : frames.map((e) => {
          return (
            <Button style={item} variant="outline-dark" onClick={() => handleFrame(e.id)} name="madera" >{e.name}</Button>
          )
        })}
      </Container>
      <Container className="d-flex justify-content-center">
        <h5 style={item} >$400</h5> <br />

        <Button style={item} variant="outline-dark" type="submit" size="lg" onClick={handleClick} >Siguiente Paso</Button>{" "}
      </Container>
    </div>
  );
};


























