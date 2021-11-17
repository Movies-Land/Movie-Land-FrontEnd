import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-xyewrgkv.eu.auth0.com"
    clientId="PgyP7TYQRuWdgEbpcgVMLkSI1zyHFAdV"
    redirectUri={window.location.origin}
  >
    <App />

  </Auth0Provider>,
  document.getElementById("root")
);

