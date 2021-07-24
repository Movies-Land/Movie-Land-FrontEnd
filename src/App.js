import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'img/img2.jpg',
  '../img/Movie-Land-png-2.png',
  'src/img/poster1.jpg'
];
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          {/* <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div> */}
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
