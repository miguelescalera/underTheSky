import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";



export default ({handleSize, handleFrame, handleColor}) => {
  return (
    <div>
      <h2>Product</h2>
      <Container className="d-flex justify-content-center">
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://strellas.com/wp-content/uploads/2019/03/Framed-Star-map-poster-ES-Word-press.png"
            />
          </Card.Body>
          <Card.Header>Estilo del cuadro </Card.Header>{" "}{/* ver como puede llegar el estilo del cuadro */}
        </Card>
      </Container>
      <Container className="d-flex justify-content-center">
        <h4>Tamaño</h4>
        
        <div>
        <Button variant="outline-info" onClick ={handleSize} name="13x18" >13x18</Button>
        <Button variant="outline-info" onClick ={handleSize} name="30x40" >30x40</Button>
        <Button variant="outline-info" onClick ={handleSize} name="50x70" >50x70</Button>
        </div>
        <h5>$400</h5>

      </Container>
      <Container className="d-flex justify-content-center">
        <h4>Color</h4>
        
        <div>
        <Button variant="outline-info" onClick={handleColor} name="Blue" >Blue</Button>
        <Button variant="outline-info" onClick={handleColor} name="black" >Black</Button>
        <Button variant="outline-info" onClick={handleColor} name="rose" >Rose</Button>
        </div>      

      </Container>
      <Container className="d-flex justify-content-center">
        <h4>Marco</h4>

        <div>
        <Button variant="outline-info" onClick={handleFrame} name="madera" >Madera</Button>
        <Button variant="outline-info" onClick={handleFrame} name="negro" >Negro</Button>
        <Button variant="outline-info" onClick={handleFrame} name="blanco" >Blanco</Button>
        </div>

      </Container>
      <Container className="d-flex justify-content-center">
      <Button variant="outline-info"  type="submit" size="lg" >Comprar</Button>{" "}
      </Container>

    </div>

  );
};
