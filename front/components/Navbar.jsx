import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Image from "react-bootstrap/Image";

export default () => {



  const navLogo = {
    height:'80px'
  }

  const navBarStyle = {
    position: "fixed",
    width:'100%',
    top:0,
    backgroundColor: "#e8e8e8",
    color: "#6d6d6d",
    textAlign: "center",
  }

  const navFont = {
  
      color: "#6d6d6d"
  
  }




  return (
    <div>
<<<<<<< HEAD
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
            <button><Link to="/products" >products</Link></button>
            <button><Link to="/cart" >cart</Link></button>
        </Navbar>
=======
      <Navbar style={navBarStyle}>
        <Link to="/home">
          <Image style={navLogo} src={"http://undertheskydeco.com/images/logo1.png"} />
        </Link>
        <Nav className="mr-auto">
          <Nav.Link><Link style={navFont} to="/products/getProducts">Productos</Link></Nav.Link>
          <Nav.Link><Link style={navFont} to="/register" >Register</Link></Nav.Link>
          <Nav.Link><Link style={navFont} to="/Login" >login</Link></Nav.Link>
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
>>>>>>> 621e3762018c7f13c799ccd03b6b0b1a2cd7c791
    </div>
  );
};







