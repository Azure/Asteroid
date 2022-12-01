import { ThemeProvider } from "@fluentui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { TitleBar } from "./components/TitleBar";

// Local Imports
import { App } from "./pages/App";
import Configuration from "./pages/Configuration";
import { Deployment } from "./pages/Deployment";
import { currentTheme } from "./utils/styles/Theme";

// Selects the theme dependent on the preferred color scheme of user: Light or Dark

ReactDOM.render(
  <ThemeProvider applyTo="body" theme={currentTheme}>
    <React.StrictMode>
      <TitleBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Configuration" element={<Configuration />} />
          <Route path="/Deployment" element={<Deployment />} />
        </Routes>
      </HashRouter>
      <Footer /> 
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
