import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Link} from "react-router-dom"

export default ()=>{
    return(
        <Container>
            <Jumbotron>
                <h1>
                    Under The Sky 
                </h1>
                <h2>
                    Muchas Gracias Por Tu Compra!
                </h2>
                <p>
                    <Link to="/products/getProducts">Home</Link>
                </p>
            </Jumbotron>
        </Container>
    )
}