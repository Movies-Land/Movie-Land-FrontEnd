import React from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {
  render() {
    return (
      <div className="main">
      <Main/>
      </div>
    );
  }
}
export default withAuth0(App);
