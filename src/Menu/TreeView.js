import React from "react";

export default function TreeView(props) {

    const {principal, icon}=props


  return (
    <li class="nav-item">
      <a href="#" class="nav-link ">
        <i class={`nav-icon fas ${icon}`}></i>
        <p>
          {principal}
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item">
          <a href="./index.html" class="nav-link">
            <i class="fas fa-arrow-right nav-icon"></i>
            <p>2021</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="./index2.html" class="nav-link">
            <i class="fas fa-arrow-right nav-icon"></i>
            <p>2020</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="./index3.html" class="nav-link">
            <i class="fas fa-arrow-right nav-icon"></i>
            <p>2019</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="./index3.html" class="nav-link">
            <i class="fas fa-arrow-right nav-icon"></i>
            <p>2018</p>
          </a>
        </li>
      </ul>
    </li>
  );
}
