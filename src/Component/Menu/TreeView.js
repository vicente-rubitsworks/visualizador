import React from "react";
import { Link } from "react-router-dom";

export default function TreeView(props) {

    const {principal, icon,link='/'}=props


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
          <a href={link} className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>2021</p>
          </a>
        </li>
       
      </ul>
    </li>
  );
}
