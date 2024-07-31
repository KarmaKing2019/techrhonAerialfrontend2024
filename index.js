import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

// == DESCOPE.COM
import {
  AuthProvider,
  useDescope,
  useSession,
  useUser,
} from "@descope/react-sdk";
import { Descope } from "@descope/react-sdk";
import { useCallback } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Techrhon-web project on Descope
  <AuthProvider projectId="P2bsedlks6p6XuKMdXlylgisXnw5">
    {/* <div className="shadow-lg w-100 p-0 " style={{ position: "relative", backgroundImage:'./images/greyBlack.jpg' }}> */}
    <div
      className="  shadow-lg p-0 d-flex justify-content-center"
      style={{
        position: "relative",
        backgroundColor: "#626262",
        width: "100%",
      }}
    >
      {/* <video
        autoPlay
        muted
        loop
        id="myVideo"
        className=""
        style={{
          position: "absolute",
          width: "110%",
          // backgroundImage: `url(${"./images/longroad.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <source src="./images/hurricane_homes.mp4" type="video/mp4" />
      </video> */}
      <App />
    </div>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
