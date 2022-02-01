import React from "react";
import { Link } from "react-router-dom";

export default function Resumen(props) {
  const { principal, icon, link = "" } = props;

  return (
    <li className="nav-item">
      <a href="#" className="nav-link ">
        <i className={`nav-icon fas ${icon}`}></i>
        <p>
          {principal}
          <i className="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul className="nav nav-treeview">
        <li className="nav-item">
          <a href={`${link}/resumen/directorios`} className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>Directorios</p>
          </a>
        </li>
        <li className="nav-item">
          <a href={`${link}/r-matriculass`} className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>Matriculas</p>
          </a>
        </li>
      </ul>
    </li>
  );
}
