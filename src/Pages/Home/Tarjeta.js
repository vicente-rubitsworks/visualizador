import React, { Component } from "react";

export default function Tarjeta(props) {
  const { nombre, dato, icon } = props;
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="info-box bg-info  h-75">
        <span className="info-box-icon">
          <i className={`fa ${icon}`} />
        </span>
        <div className="info-box-content ">
          <span className="info-box-text">{nombre}</span>
          <span className="info-box-number">{dato}</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "91%" }} />
          </div>
          <span className="progress-description ">91% Urbanos</span>
        </div>
        {/* /.info-box-content */}
        <a href="#" className="info-box-footer">
          <i className="fas fa-arrow-circle-right" />
        </a>
      </div>
      {/* /.info-box */}
    </div>
  );
}
