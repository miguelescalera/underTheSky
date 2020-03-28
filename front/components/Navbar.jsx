import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Image from "react-bootstrap/Image";

export default ({cart}) => {

const cartLength={
  backgroundColor: "#000000a6",
  width:"18px",
  height: "18px",
  zindex: "2",
  position: "absolute",
  borderRadius: "50%",
  color:"white",
  marginLeft: "21px",
  fontSize: "12px"
}

const cartButton={
  color: "#6d6d6d",
  color: "rgb(109, 109, 109)",
  zIndex: "1",
  position: "absolute"
}

  const navLogo = {
    height: '80px'
  }

  const navBarStyle = {
    position: "fixed",
    width: '100%',
    top: 0,
    backgroundColor: "#e8e8e8",
    color: "#6d6d6d",
    textAlign: "center",
  }

  const navFont = {

    color: "#6d6d6d"

  }




  return (
    <div>
      <Navbar style={navBarStyle}>
        <Link to="/home">
          <Image style={navLogo} src={"http://undertheskydeco.com/images/logo1.png"} />
        </Link>
        <Nav className="mr-auto">
          <Nav.Link><Link style={navFont} to="/products/getProducts">Productos</Link></Nav.Link>
          <Nav.Link><Link style={navFont} to="/register" >Register</Link></Nav.Link>
          <Nav.Link><Link style={navFont} to="/Login" >login</Link></Nav.Link>
<<<<<<< HEAD
          <div>
            <span style={cartLength}>{cart.length}</span>
          <Nav.Link><Link style={cartButton}to="/cart" >cart</Link></Nav.Link>
          </div>
        </Nav>
        <Form inline>
        </Form>
=======
          <Nav.Link><Link style={navFont}to="/cart" >cart</Link></Nav.Link>
        </Nav>
        <Form inline>
        </Form>

>>>>>>> bb48273be9d772c200878aa76c17bf50be0176a8
      </Navbar>
    </div>
  );
};


        
         





