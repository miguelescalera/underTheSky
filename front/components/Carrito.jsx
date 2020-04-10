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
  handleDelete,
  handleSubmit,
  handleQuantity,
  handleEditData,
  
}) => {
  
  
 
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  let quantity = 1;

  
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
        {dataProduct.map((e, i) => {
          quantity = e.quantity;
       
          return (
            <Container className="carrito-contenedor-productos" >
              {/* ESTILO */}
              {/* ESTILO */}
              {/* ESTILO */}
              {/* ESTILO */}
              <Row>
                <div>
                  <h4 style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                    {e.style}{" "}
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
                    <strong>Tamaño: </strong> {e.size}
                  </Row>
                  <Row>
                    <strong>{e.digital?<span>digital</span>: <span>marco: </span> } </strong>{e.frame}
                  </Row>
                  <Row>
                    <strong>Color: </strong>
                    {e.color}
                  </Row>
                  <Row>
                    <h5>${e.price * quantity}</h5>
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
                          e.id,
                          e.quantity - 1
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
                          e.id,
                          e.quantity + 1
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
                        handleDelete(e.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </Row>
                 
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                    {/* BOTON DETALLE */}
                   
                    
                       
                            <h4>{e.style} </h4>
                            
                           
                           
                            <ListGroup variant="flush">
                              <ListGroup.Item style={styleModal}>
                                <strong>date: </strong> {e.date}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>name: </strong> {e.name}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>content: </strong>{" "}
                                {e.content}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>time: </strong> {e.time}
                              </ListGroup.Item>

                              <ListGroup.Item style={styleModal}>
                                <strong>email: </strong>{" "}
                                {e.emailClient}
                              </ListGroup.Item>

                              <ListGroup.Item
                                style={{
                                  textAlign: "center",
                                  display: "inline"
                                }}
                              >
                                <Button variant="dark" onClick={()=>handleEditData(e)}>edit data</Button>
                              </ListGroup.Item>
                            </ListGroup>
                       
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    {/* CHECKOUT */}
                    
                </Col>
              </Row>
            </Container>
          );
        })}
      </Container>

  );
};
                   
                      
                    
                        
                        
