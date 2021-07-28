import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-wsv0j42l.us.auth0.com"
    clientId="0fTUhmAPdWuQgNhu3fp6mOMEAZu6aadn"
    redirectUri={window.location.origin}
  >
    <App />

  </Auth0Provider>,
  document.getElementById("root")
);

