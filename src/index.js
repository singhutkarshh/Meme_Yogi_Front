import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

//authorisation domain and client id
// dev-9pfp2jo6.jp.auth0.com
// y46xV1Z9dKO4betonNQAyBgQkvXGu2lc

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9pfp2jo6.jp.auth0.com"
      clientId="y46xV1Z9dKO4betonNQAyBgQkvXGu2lc"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
