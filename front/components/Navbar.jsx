import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Image from "react-bootstrap/Image";

export default () => {
  return (
    <div>
        <Navbar bg="light" variant="light">
          <Link to="/home">
          <Image src={"http://undertheskydeco.com/images/logo1.png"} />          
          </Link>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/products/getProducts">Productos</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <button><Link to="/login" >login</Link></button>
          </Form>
            <button><Link to="/register" >Register</Link></button>
        </Navbar>
    </div>
  );
};







 