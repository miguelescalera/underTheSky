import React from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

 export default ({styles, Allfss, handleDelete})=>{
   
    const frames = Allfss.frames;
    const sizes = Allfss.sizes

    const botonSelecc = {
        fontSize: "0.7rem",
      };
 
    console.log("estilos",styles)
    console.log("FRAMES",frames)
    console.log("SIZESS",sizes)
    return(
        <Container>
            <Row style={{ marginBlockStart: "5rem" }} >
        {styles.map((style)=>{
            return(
                <Col xs={2} >
            <div>
                <Card className="tarjetaproducto">
                    <Card.Img variant="top" src={style.imgPath.toString().split("/public")[1]} />
                    <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text className="titulotarjeta">
                            {style.name.charAt(0).toUpperCase() + style.name.slice(1)}
                            </Card.Text>
                            <Card.Text className="titulotarjeta">
                            {style.color.charAt(0).toUpperCase()+style.color.slice(1)}
                            {style.name === 'zodiac' ? ' - ' +style.signo.charAt(0).toUpperCase()+style.signo.slice(1):null}
                            </Card.Text>
                        </Col>
                    </Row>

                    <Row style={{ justifyContent: "center" }}>
                        <Col>
                        <span>
                            <Button
                            className="boton-outline"
                            style={botonSelecc}
                            onClick={() =>handleDelete(style.id)}
                            >
                            Eliminar
                            </Button>
                        </span>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
            </Col>
            )
        })}
        </Row>
        </Container>
    )
}
 