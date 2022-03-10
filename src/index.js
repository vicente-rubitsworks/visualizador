import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Directorio from "./Pages/Directorio";
import Matriculas from "./Pages/Matriculas";
import ResumenDirectorio from "./Pages/ResumenDirectorio";
import ResumenMatricula from "./Pages/ResumenMatricula/ResumenDirectorio";
import Creador from "./Pages/CreadorDeGraficos";
import firebaseConfig from "./firebase-config";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig2 } from "./config";
import Register from "./Pages/Register";
import { authContext } from "./context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />

        <Route path="Home" element={<Home />} />
        <Route path="resumen/directorios" element={<ResumenDirectorio />} />
        <Route path="resumen/matriculas" element={<ResumenMatricula />} />

        <Route path="directorio/2021" element={<Directorio />} />
        <Route path="directorio/2020" element={<Directorio anio={2020} />} />
        <Route path="directorio/2019" element={<Directorio anio={2019} />} />
        <Route path="matriculas/2020" element={<Matriculas anio={2020} />} />
        <Route path="matriculas/2019" element={<Matriculas anio={2019} />} />
        <Route
          path="matriculas/creador"
          element={
            <Creador
              url="https://analizador-backend.herokuapp.com/matriculas/creador/prueba/"
              columns="https://analizador-backend.herokuapp.com/matriculas/columnas/"
            />
          }
        />
        <Route
          path="directorio/creador"
          element={
            <Creador
              url="https://analizador-backend.herokuapp.com/directorio/creador/prueba/"
              columns="https://analizador-backend.herokuapp.com/directorio/columnas/"
            />
          }
        />

        <Route path="*" element={<ResumenDirectorio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
