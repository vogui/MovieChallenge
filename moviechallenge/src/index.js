import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/app/App";
import { BrowserRouter, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>

    <Auth0Provider
      domain="vetupelicula.us.auth0.com"
      clientId="1c0zvt4DOtpb0XcWWbrl11YP3RfL0paQ"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
      <Route path="/" component={App} />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
