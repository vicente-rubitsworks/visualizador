import React, { Component } from "react";
import logo from "./ucn_logo.png";
import TreeView from "./TreeView";
import Resumen from "./Resumen";

export default class Menu extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-light-navy elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img
            src={logo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text font-weight-light">Visualizador</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
     with font-awesome or any other icon font library */}
              <Resumen principal="RESUMEN" icon="fa-newspaper" />
              <li className="nav-header">REPORTES</li>
              <TreeView
                principal="Directorio"
                icon="fa-chart-area"
                link="/directorio"
              />
              <TreeView
                principal="Matrícula"
                icon="fa-chart-area"
                link="/matriculas"
              />

              <li className="nav-header">UTILIDADES</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-map-marked" />
                  <p>
                    Mapa regional
                    <span className="right badge badge-success">Ver</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link ">
                  <i className={`nav-icon fas fa-chart-bar`}></i>
                  <p>
                    Buscador de tablas
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href={`/directorio/creador`}
                      className="nav-link"
                    >
                      <i className="fas fa-arrow-right nav-icon"></i>
                      <p>Directorios</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={`/matriculas/creador`} className="nav-link">
                      <i className="fas fa-arrow-right nav-icon"></i>
                      <p>Matriculas</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
