import React, { Component } from "react";
// import "../components(CSS)/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../components(CSS)/Header.css";
// import img
import logoImg from "../img/Movie-Land-png-2.png";
import backgroungImg from "../img/poster1.jpg";
import Login from './Login'

// //////////////////////////////////////////////

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div className="header">
        {isAuthenticated === true ? <LogoutButton /> : ""}


                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://files.slack.com/files-pri/TNGRRLUMA-F028EBHTMKL/movie-land-png.png"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home">Home</Nav.Link>
                                <Nav.Link href="#link">Profile</Nav.Link>
                                <Nav.Link href="#link">Contact Us</Nav.Link>
                                <Nav.Link href="#link">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <img
                        src="https://files.slack.com/files-pri/TNGRRLUMA-F028EBHTMKL/movie-land-png.png"
                        alt="back ground img"
                    />
                </div>
            </div>
        );
    }

}

export default withAuth0(Header);
