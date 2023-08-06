import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-iqjnmzs6nb51u1l8.us.auth0.com"
    clientId="FWvAvzl9NlOrQDQ3vdd8NrXkfiSZmKRk"
    redirectUri={window.location.origin}
  >
    <App />,
  </Auth0Provider>,
  document.getElementById("root")
);
