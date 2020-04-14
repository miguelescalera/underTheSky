import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default ({ cartItems, handelLogout, User, hidden }) => {
  const [expanded, setExpanded] = useState(false);
  
  
  
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
    zIndex: 10
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
    textAlign: "center",
    zIndex:11
  };

  const navFont = {
    color: "#6d6d6d"
  };

  const navBarMenu = {
    textAlign: "center"
  };

  const isAdmin= ()=>{
    if(User.type==="admin"){
      return(
        <Link style={navFont} to="/eladmin" onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>
                Admin
        </Link>
      )
    }
  } 

  const loginLogout = () => {
    if (User.email) {
      return (
        <span
          onClick={() => {
            handelLogout();
            setTimeout(() => {
              setExpanded(false);
            }, 150);
          }}
          style={navFont}
        >
          logout
        </span>
      );
    } else {
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
          <FontAwesomeIcon icon={faBars} />
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
            <Nav.Link>
              {isAdmin()}
            </Nav.Link>
            <div>
              <span style={cartLength}>{cartItems.length}</span>
              <Nav.Link>
                <Link
                  style={cartButton}
                  to="/cart"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  Cart
                </Link>
              </Nav.Link>
        
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
