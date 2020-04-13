import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import { Container, Row, Col,NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default ({ 
    cartItems,
    handelLogout,
    User,
    hidden,
    handlePerfil,
    toggleDrop,
    toggleDropdown
   }) => {
  const [expanded, setExpanded] = useState(false);
  
  const dropdown={
    paddingTop:"8px",
    position: "relative",
    display: "inline-block"
  }
  
  let dropdownContent={
    borderRadius:"5px",
    width: "180px",
    height: "245px",
    marginTop:"27px",
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    padding: "12px 16px",
    zIndex: "1"
  }
   
  if(toggleDrop){
    dropdownContent.display="block"
  }
  else{
    dropdownContent.display="none"
  }

  if(User.email){
    dropdown.display= "inline-block"
  }
  else{
    dropdown.display= "none"
  }
  
  const cartLength = {
    backgroundColor: "#000000a6",
    width: "18px",
    height: "18px",
    zindex: "2",
    position: "absolute",
    borderRadius: "50%",
    color: "white",
    marginLeft: "10px",
    fontSize: "12px"
  };

  const cartButton = {
    color: "#6d6d6d",
    color: "rgb(109, 109, 109)",
    zIndex: "1"
  };

  const navLogo = {
    height: "auto",
    maxHeight: "85px",
    marginTopStart: "10px"
  };

  const navBarStyle = {
    width: "100%",
    top: 0,
    backgroundColor: "#282624",
    color: "#6d6d6d",
    textAlign: "center"
  };

  const navFont = {
    color: "#6d6d6d"
  };

  const navBarMenu = {
    textAlign: "center"
  };

  

 



  const loginLogout = () => {
    if (!User.email) {
      return (
        <Link
        style={navFont}
        to="/Login"
        onClick={() =>
          setTimeout(() => {
            setExpanded(false);
          }, 150)
        }
      >
        Login
      </Link>
       );
     } 
   };
       
          


  const navButton = {
    color: "#ec7263",
    border: "none"
  };
  let viewState = hidden ? hidden : null;

  return (
    <div>
      <Navbar
        className={viewState}
        style={navBarStyle}
        expand="lg"
        expanded={expanded}
      >
        {/* <Navbar.Brand  > */}

        <Col
          style={{ textAlign: "end", padding: "0" }}
          xs={7}
          sm={4}
          md={3}
          lg={3}
        >
          <Link to="/home">
            <Image
              // xs={7}
              // sm={7}
              // md={4}
              // lg={6}
              style={navLogo}
              src={"http://undertheskydeco.com/images/logo1.png"}
              fluid
            />
          </Link>
        </Col>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={navButton}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </Navbar.Toggle>

        {/* </Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav" style={navBarMenu}>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                style={navFont}
                to="/products/getProducts"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Productos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={navFont}
                to="/register"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              {loginLogout()}
            </Nav.Link>
            <Nav.Link style={navFont}>
                <div style={dropdown} onClick={toggleDropdown}>
                  <span>mi perfil</span>
                  <div style={dropdownContent}>
                    <div style={{marginBottom:"15px",borderBottom:"solid 1px gray"}}>
                      <span>{User.type==="admin"? <span style={{color:"blue"}}>administrador</span>:<br/>}</span>
                      <h6><strong>{User.firstName+" "+User.lastName}</strong> </h6>
                      <span>{User.email}</span><br/>
                    </div>
                    <div>
                      <Link style={navFont} to="/eladmin" onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>
                      {User.type==="admin"?<span>administrar productos</span>:<br/>}
                      </Link>
                    </div>
                    <div style={{marginBottom:"15px"}}>
                      <Link to="/usersOrders" ><span>ver tus compras</span></Link><br/>
                      <Link to="/cart" ><span>ver tu carrito</span></Link><br/>
                      <Link to="/editProfile"><span>editar perfil</span></Link><br/>
                    </div>
                    <div>
                    <span onClick={() => {
                            handelLogout();
                            setTimeout(() => {
                              setExpanded(false);
                            }, 150);
                        }}
                style={navFont}
              >
                salir
              </span >
                    </div>
                  </div>
                </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
                  

            

              
              
            

