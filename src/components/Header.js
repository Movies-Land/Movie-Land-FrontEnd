import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../components(CSS)/Header.css";
import logoImg from "../img/movie-land-white-text.png";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar bg="light" expand="lg" className="nav-bar">
          <Container className="Container">
            <Link to="/">
              <div className="logoImg">
                <img src={logoImg} alt="Logo" style={{ width: "160px" }} />
              </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">Home</Link>
               {this.props.auth0.isAuthenticated && <Link to="/Profile">Profile</Link>} 
                <Link to="/ContactUs">ContactUs</Link>
               {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default withAuth0(Header);
