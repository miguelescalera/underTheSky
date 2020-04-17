import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom'

export default ({ styles, frames, sizes, handleDeleteStyle, handleDeleteSize, handleDeleteFrame }) => {

    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(false)
    const [press, setPress] = useState(false)

    const botonSelecc = {
        fontSize: "0.7rem",
    };
    console.log("estilos", styles)
    console.log("FRAMES", frames)
    console.log("SIZESS", sizes)

    return (
        <div style={{ justifyContent: "center", marginBlockStart: "2rem", marginBlockEnd: "1rem" }} >
            <Button
                className="boton-outline"
                style={botonSelecc}
                style={{ justifyContent: "center" }}
                onClick={() => setOpen(!open)}
                aria-controls="Estilos"
                aria-expanded={open}
            >
                Estilos
            </Button>
            <Button
                className="boton-outline"
                style={botonSelecc}
                style={{ justifyContent: "center" }}
                onClick={() => setCount(!count)}
                aria-controls="Marcos"
                aria-expanded={count}
            >
                Marcos
            </Button>
            <Button
                className="boton-outline"
                style={botonSelecc}
                style={{ justifyContent: "center" }}
                onClick={() => setPress(!press)}
                aria-controls="Tamaños"
                aria-expanded={press}
            >
                Tamaños
            </Button>

            <Collapse in={open}>
                <div id="Estilos">
                    <Container style={{ marginBlockStart: "5rem" }}  >
                        <Row >
                            {styles.map((style) => {
                                return (
                                    <Col xs={2} >
                                        <Card className="tarjetaproducto">
                                            <Card.Img variant="top" src={style.imgPath.toString().split("/public")[1]} />
                                            <Card.Body>
                                                <Row>
                                                    <Col>
                                                        <Card.Text className="titulotarjeta">
                                                            {style.name.charAt(0).toUpperCase() + style.name.slice(1)}
                                                        </Card.Text>
                                                        <Card.Text className="titulotarjeta">
                                                            {style.color.charAt(0).toUpperCase() + style.color.slice(1)}
                                                            {style.name === 'zodiac' ? ' - ' + style.signo.charAt(0).toUpperCase() + style.signo.slice(1) : null}
                                                        </Card.Text>
                                                    </Col>
                                                </Row>

                                                <Row style={{ justifyContent: "center" }}>
                                                    <Col>
                                                        <span>
                                                            <Button
                                                                className="boton-outline"
                                                                style={botonSelecc}
                                                                onClick={() => handleDeleteStyle(style.id)}
                                                            >
                                                                Eliminar
                            </Button>
                                                            <Link to={`/eladmin/editStyle/${style.id}`}>
                                                                <Button
                                                                    className="boton-outline"
                                                                    style={botonSelecc}

                                                                >
                                                                    Editar
                            </Button>
                                                            </Link>
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </Collapse>

            <Collapse in={count}>
                <div id="Marcos">
                    <Container style={{ marginBlockStart: "2rem" }} >
                        <Row>
                            {frames ? frames.map((frame) => {
                                return (
                                    <Col xs={1} >
                                        <Row>
                                            <Card.Img variant="top" src={frame.imgPath.toString().split("/public")[1]} />
                                            {frame.name}
                                        </Row>
                                        <Row style={{ justifyContent: "center" }} >
                                            <Col>
                                                <span>
                                                    <Button
                                                        className="boton-outline"
                                                        style={botonSelecc}
                                                        onClick={() => handleDeleteFrame(frame.id)}
                                                    >
                                                        Eliminar
                                </Button>

                                                    <Link to={`/eladmin/editFrame/${frame.id}`} >
                                                        <Button
                                                            className="boton-outline"
                                                            style={botonSelecc}

                                                        >
                                                            Editar
                            </Button>
                                                    </Link>
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            }
                            ) :
                                <span>

                                </span>}
                        </Row>
                    </Container>
                </div>
            </Collapse>
            <Collapse in={press}>
                <div id="Tamaños">
                    <Container style={{ marginBlockStart: "2rem" }}>
                        <Row>
                            {sizes ? sizes.map(size => {
                                return (
                                    <Col xs={2}>
                                        <Row>
                                            {size.name}
                                        </Row>
                                        <Row style={{ justifyContent: "center" }} >
                                            <Col>
                                                <span>
                                                    <Button
                                                        className="boton-outline"
                                                        style={botonSelecc}
                                                        onClick={() => handleDeleteSize(size.id)}
                                                    >
                                                        Eliminar
                                </Button>
                                                    <Link to={`/eladmin/editSize/${size.id}`}> <Button
                                                        className="boton-outline"
                                                        style={botonSelecc}

                                                    >
                                                        Editar
                            </Button></Link>
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            }) :
                                <span></span>
                            }
                        </Row>
                    </Container>
                </div>
            </Collapse>

        </div>

    )
}
