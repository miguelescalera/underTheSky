import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
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
          <Nav.Link> <Link to="/products/getProducts">Productos</Link></Nav.Link>
          <Nav.Link><Link to='/h'><Link to="/register" >Register</Link></Link></Nav.Link>
          <Nav.Link><Link to="/Login" >login</Link></Nav.Link>
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
    </div>
  );
};







