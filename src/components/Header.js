import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../components(CSS)/Header.css";
import logoImg from "../img/movie-land-white-text.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar bg="light" expand="lg" className="nav-bar">
          <Container className="Container">
            <Link onClick={this.props.handleCloseSearch} to="/">
              <div className="logoImg">
                <img src={logoImg} alt="Logo" style={{ width: "160px" }} />
              </div>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  onClick={this.props.handleCloseSearch}
                  className="links-nav"
                  to="/"
                >
                  Home
                </Link>

                {this.props.auth0.isAuthenticated && (
                  <Link className="links-nav" to="/Profile">
                    Profile
                  </Link>
                )}

                <Link className="links-nav" to="/AboutUs">
                  About Us
                </Link>

                {this.props.auth0.isAuthenticated ? (
                  <LogoutButton />
                ) : (
                  <LoginButton />
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default withAuth0(Header);
