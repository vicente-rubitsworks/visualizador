import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Directorio from "./Pages/Directorio";
import Matriculas from "./Pages/Matriculas";
import ResumenDirectorio from "./Pages/ResumenDirectorio";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<Home />} />
        <Route path="resumen/directorios" element={<ResumenDirectorio />} />

        <Route path="directorio/2021" element={<Directorio />} />
        <Route path="directorio/2020" element={<Directorio anio={2020} />} />
        <Route path="directorio/2019" element={<Directorio anio={2019} />} />
        <Route path="matriculas/2020" element={<Matriculas anio={2020} />} />
        <Route path="matriculas/2019" element={<Matriculas anio={2019} />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
