import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/daycareLogo.png";
import "./header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../CustomLink/CustomLink";
import { BeakerIcon } from "@heroicons/react/solid";
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
          <Nav className="me-auto fw-medium fs-5">
            <Nav.Link as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to="home#services">
              Services
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav className=" fw-medium fs-5">
            <Nav.Link as={CustomLink} to="/service/:serviceId">
              Checkout
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/signup">
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
