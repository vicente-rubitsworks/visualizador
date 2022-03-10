import React from "react";
import { signup, useAuth, logout, login } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const currentUser = useAuth();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/register`;
    navigate(path);
  };
  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("error");
    }
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contacto
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-none d-sm-inline-block">
          <a
            href="#"
            className="nav-link"
            onClick={function (event) {
              handleLogout(event);
              routeChange(event);
            }}
          >
            {currentUser?.email} | Cerrar sesión
          </a>
        </li>
      </ul>
    </nav>
  );
}
