import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* we need to add neame componant ..... */}

            <Route exact path="./Main">
              <Main></Main>
            </Route>
            {/* <Route exact path="/profile" component={"Profile"}></Route>
            <Route exact path="/contactus" component={"ContactUs"}></Route>
            <Route exact path="/login" component={"Login"}></Route> */}
          </Switch>
          <Main />
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
