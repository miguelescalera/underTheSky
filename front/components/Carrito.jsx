import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMinusCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

export default ({
  dataProduct,
  userProduct,
  fss,
  handleDelete,
  handleSubmit,
  handleQuantity
}) => {
  console.log("dataProduct Carrito", dataProduct);
  console.log("userProduct Carrito", userProduct);
  console.log("fss Carrito", fss);

  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let allData = [];
  let quantity = 1;

  if (userProduct[0] && fss[0]) {
    for (let i = 0; i < dataProduct.length; i++) {
      allData.push({
        dataProduct: dataProduct[i],
        userProduct: userProduct[i].data,
        fss: fss[i].data
      });
    }
  } else {
    allData = [];
  }

  console.log("ALL DATA:", allData);

  const quantityStyle = {
    display: "inline-block",
    marginLeft: "3%",
    marginRight: "3%"
  };

  const styleModal = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (

      <Container>
        {allData.map((e, i) => {
          quantity = e.dataProduct.quantity;

          return (
            <Container className="carrito-contenedor-productos">
              {/* ESTILO */}
              {/* ESTILO */}
              {/* ESTILO */}
              {/* ESTILO */}
              <Row>
                <div>
                  <h4 style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                    {e.fss.style.name}{" "}
                  </h4>
                </div>
              </Row>
              <Row>
                <Col>
                  {/* IMAGEN */}
                  {/* IMAGEN */}
                  {/* IMAGEN */}
                  {/* IMAGEN */}

                  <img
                    style={{ width: "100%" }}
                    src="https://i.imgur.com/Usradoq.png"
                    alt=""
                  />
                </Col>

                <Col className="carrito-info">
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  <Row>
                    <strong>Tamaño: </strong> {e.fss.size.name}
                  </Row>
                  <Row>
                    <strong>Marco: </strong> {e.fss.frame.name}
                  </Row>
                  <Row>
                    <strong>Color: </strong>
                    {e.fss.style.color}
                  </Row>
                  <Row>
                    <h5>${e.fss.size.price * quantity}</h5>
                  </Row>

                  <Row>
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}

                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleQuantity(
                          e.dataProduct.id,
                          e.dataProduct.quantity - 1
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                    <div >{quantity}</div>
                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleQuantity(
                          e.dataProduct.id,
                          e.dataProduct.quantity + 1
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                    <br />

                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}

                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleDelete(e.dataProduct.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </Row>
                  <Row>
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                    <button className="boton-icono" onClick={handleShow}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </button>{" "}
                    <br />
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Body>
                        <Container>
                          <Row>
                            <h4>{e.fss.style.name} </h4>
                            <img
                              style={{ width: "50%" }}
                              src="https://i.imgur.com/Usradoq.png"
                              alt=""
                            />
                            <br />
                            <strong>size: </strong>
                            {e.fss.size.name} <br />
                            <strong>frame: </strong>
                            {e.fss.frame.name} <br />
                            <strong>color: </strong>
                            {e.fss.style.color} <br />
                            <h5>${e.fss.size.price}</h5>
                            <ListGroup variant="flush">
                              <ListGroup.Item style={styleModal}>
                                <strong>date: </strong> {e.dataProduct.date}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>name: </strong> {e.dataProduct.name}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>content: </strong>{" "}
                                {e.dataProduct.content}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>time: </strong> {e.dataProduct.time}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>email: </strong>{" "}
                                {e.dataProduct.emailClient}
                              </ListGroup.Item>

                              <ListGroup.Item
                                style={{
                                  textAlign: "center",
                                  display: "inline"
                                }}
                              >
                                <Button variant="dark">edit data</Button>
                              </ListGroup.Item>
                            </ListGroup>
                          </Row>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    <Button
                      className="boton-outline-small"
                      onClick={() => handleSubmit([e.dataProduct.id])}
                    >
                      checkout
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Container>

  );
};
