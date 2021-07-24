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
import logoImg from "../img/movie-land-white-text.png";
import backgroungImg from "../img/poster1.jpg";
import Login from './Login'
// //////////////////////////////////////////////
class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="header">

        <Navbar bg="light" expand="lg" className="nav-bar">
          <Container className="Container">
            <Navbar.Brand href="#home">
              <div className="logoImg">
                <img src={logoImg} alt="Logo" style={{ width: "160px" }} />
              </div>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/HomePage">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/ContactUs">ContactUs</Link>
                {isAuthenticated === true ? <LogoutButton /> : ""}
                <div className="logInDiv">
                  <Login />
                </div>
                {/* 
                {isAuthenticated ? <LoginButton /> : <LogoutButton/> } */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <div>
          <img src={backgroungImg} alt="back ground img" />
        </div> */}
      </div>
    );
  }
}
export default withAuth0(Header);