import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'



class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          
          <Switch>
            {/* we need to add neame componant ..... */}

            <Route exact path="./Main">
              <Main></Main>
            </Route>
          
          </Switch>
          <Main />
          <Footer />
        </Router>

      

      </div>
    );
  }
}
export default App;
