import React from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

export default ({ 
        handleChange,
        handleSubmit,
        userEmail,
        nameUser,
        lastNameUser
    }) => {



    
    const orderStyle={
        marginBottom:"20%",
        width:"40%",
        boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
        border: "solid 1px #80808061"
    }

    const formStyle = {
        
        padding: "1rem",
        borderRadius: "0px",

    }
    const divFormStyle = {
        justifyContent: 'center',
        marginBlockEnd: "5rem",
        marginBlockStart: "5rem",
        maxWidth: "400px"

    }

    const containerStyles = {

        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid rgba(0,0,0,0)',
        marginBlockStart:'5rem'
    }
    return (
        <Card style={containerStyles}>
                <span style={orderStyle}>
                     <div style={divFormStyle}>
                            <Form style={formStyle} >
                                <Form.Group controlId="formDateContent">
                                    <Form.Control type="text" onChange={handleChange} placeholder="dirección" name='address' />
                                </Form.Group>
                                <Container>
                                    <Row>
                                        <Col xs lg="6">
                                            <Form.Group controlId="formBasicPhrase">
                                                <Form.Control type="text"  onChange={handleChange} placeholder="pais" name='country' />
                                            </Form.Group>
                                        </Col>
                                        <Col xs lg="6">
                                            <Form.Group controlId="formBasicTime">
                                                <Form.Control type="text" onChange={handleChange}  placeholder="provincia" name='state' />
                                            </Form.Group>
                                        </Col >
                                        <Col xs lg="6">
                                            <Form.Group controlId="formBasicPlace">
                                                <Form.Control type="text" onChange={handleChange}  placeholder="ciudad" name='city' />
                                            </Form.Group>
                                        </Col>
                                        <Col xs lg="6">
                                            <Form.Group controlId="formBasicLanguage">
                                                <Form.Control type="text"  onChange={handleChange}  placeholder="codigo postal"  name='postCode' />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Container>
                                <Button onClick={handleSubmit} variant="dark" type="submit">
                                    comprar
                                </Button>
                            </Form>
                        </div>
                    </span>
                </Card>
            );
        };
            



                        

            
                                
                                              
                                               
                                                 
                                               
                                
                        


            





                                    
                                        

                           
                            

                           

                            
                            
                            
                            


