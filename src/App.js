import React from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
//
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);
// library.add(fab, faCheckSquare, fagithub);
// <i class="fas fa-coffee"></i>
// <i class="fab fa-github"></i>

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Main />
      </div>
    );
  }
}
export default withAuth0(App);
