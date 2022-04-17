import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/daycareLogo.png";
import "./header.css";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    // <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
    <Navbar collapseOnSelect expand="lg" id="transparent">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} height={70} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            {user && (
              <button onClick={() => signOut(auth)} className="nav-btn ">
                Sign Out
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
