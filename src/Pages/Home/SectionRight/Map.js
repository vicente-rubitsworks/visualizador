import React from "react";

export default function Map() {
  return (
    <div className="card bg-gradient-primary">
      <div className="card-header border-0">
        <h3 className="card-title">
          <i className="fas fa-map-marker-alt mr-1" />
          Visitors
        </h3>
        {/* card tools */}
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-primary btn-sm daterange"
            title="Date range"
          >
            <i className="far fa-calendar-alt" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i className="fas fa-minus" />
          </button>
        </div>
        {/* /.card-tools */}
      </div>
      <div className="card-body">
        <div id="world-map" style={{ height: 250, width: "100%" }} />
      </div>
      {/* /.card-body*/}
      <div className="card-footer bg-transparent">
        <div className="row">
          <div className="col-4 text-center">
            <div id="sparkline-1" />
            <div className="text-white">Visitors</div>
          </div>
          {/* ./col */}
          <div className="col-4 text-center">
            <div id="sparkline-2" />
            <div className="text-white">Online</div>
          </div>
          {/* ./col */}
          <div className="col-4 text-center">
            <div id="sparkline-3" />
            <div className="text-white">Sales</div>
          </div>
          {/* ./col */}
        </div>
        {/* /.row */}
      </div>
    </div>
  );
}
