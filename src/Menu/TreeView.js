import React from "react";

export default function TreeView(props) {

    const {principal, icon}=props


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
          <a href="./index.html" className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>2021</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index2.html" className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>2020</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index3.html" className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>2019</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index3.html" className="nav-link">
            <i className="fas fa-arrow-right nav-icon"></i>
            <p>2018</p>
          </a>
        </li>
      </ul>
    </li>
  );
}
