import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { TitleBar } from "./components/TitleBar";

// Local Imports
import { App } from "./pages/App";
import Configuration from "./pages/Configuration";
import { Deployment } from "./pages/Deployment";
import { currentTheme } from "./utils/styles/theme";

import { FluentProvider } from "@fluentui/react-components";

// Selects the theme dependent on the preferred color scheme of user: Light or Dark

document.body.style.margin = "0";

ReactDOM.render(
  <FluentProvider theme={currentTheme}>
    <React.StrictMode>
      <div
        className="flex-wrapper"
        style={{
          display: "flex",
          padding: "10px",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="header"
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <TitleBar />
        </div>
        <div
          className="content"
          style={{
            width: "90%",
            alignSelf: "center",
            margin: "0",
            padding: "10px",
          }}
        >
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Configuration" element={<Configuration />} />
              <Route path="/Deployment" element={<Deployment />} />
            </Routes>
          </HashRouter>
        </div>
        <div
          className="footer"
          style={{
            marginTop: "auto",
          }}
        >
          <Footer />
        </div>
      </div>
    </React.StrictMode>
  </FluentProvider>,
  document.getElementById("root")
);