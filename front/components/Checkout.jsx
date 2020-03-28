import React from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

export default ({ 
        handleChange,
        handleSubmit,
        userEmail,
        nameUser,
        lastNameUser
    }) => {

const fullname= nameUser+" "+lastNameUser

    const headerFrom={
        marginBottom: "5%",
        paddingBottom: "5%",
        borderBottom: "solid 1px gray",
        display:"flex",
        justifyContent:"space-between"
    }
    
        

    const formStyle = {
        width: "300px",
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
            <Row>
                <span>
                <div style={headerFrom}>
                            <span>{fullname}</span> 
                            <span><strong>email: </strong>{userEmail }</span>
                        </div>
                    <div style={divFormStyle}>
                        <Form style={formStyle} >
                            <Form.Group controlId="formDateContent">
                                <Form.Label>dirección</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name='address' />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhrase">
                                <Form.Label>pais</Form.Label>
                                <Form.Control type="text"  onChange={handleChange} name='country' />
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>provincia</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name='state' />
                            </Form.Group>
                            <Form.Group controlId="formBasicPlace">
                                <Form.Label>ciudad</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name='city' />
                            </Form.Group>
                            <Form.Group controlId="formBasicLanguage">
                                <Form.Label>codigo postal</Form.Label>
                                <Form.Control type="text"  onChange={handleChange} name='postCode' />
                            </Form.Group>
                            
                            <Button onClick={handleSubmit} variant="dark" type="submit">
                                Siguiente Paso
            </Button>

                        </Form>
                    </div>
                </span>
            </Row>
        </Card>


    );
};
                            
                            


