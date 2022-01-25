import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        {" "}
        {/* /.content-wrapper */}
        <footer className="main-footer">
          <strong>
            Copyright © 2022{" "}
            <a href="https://www.vicentefigueroa.com">Vicente Figueroa</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 2.0.1
          </div>
        </footer>
      </div>
    );
  }
}
