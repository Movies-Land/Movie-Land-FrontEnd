import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { HomePage } from "./components/HomePage";
import { withAuth0 } from '@auth0/auth0-react';
import Login from "./components/Login";
import Profile from "./components/Profile";


class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          
          <Switch>
            {/* we need to add neame componant ..... */}

            <Route exact path="./HomePage">
              <HomePage/>
            </Route>
            {/* <Route exact path="./Profile"> */}
              {/* <Profile/> */}

            {this.props.auth0.isAuthenticated ? <Profile /> : <Login />}
            {/* </Route> */}
        
          
          </Switch>
          <Main />
          <Footer />
        </Router>

      

      </div>
    );
  }
}
export default withAuth0(App);
