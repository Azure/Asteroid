import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

// Local Imports
import {App} from "./App";
import Page1 from "./Page1";
import ExplanationPage from "./explanationPage";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <React.StrictMode>
 <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 <Route path="/Page1" element={<Page1/>}/>
 <Route path="/explanationPage" element={<ExplanationPage/>}/>
 </Routes>
 </HashRouter>
 </React.StrictMode>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();