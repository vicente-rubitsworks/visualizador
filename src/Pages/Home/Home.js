import React, { Component } from "react";
import Tarjeta from "./Tarjeta";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import {Row, Container} from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <div>
        {" "}
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Main content */}
          <section className="content">
          <Container fluid>

              <Row>
                <Tarjeta nombre='Matrículas' dato='172,145' icon='fa-chalkboard'/>
                <Tarjeta nombre='Establecimientos' dato='1,001' icon='fa-building'/>
                <Tarjeta nombre='Cupos' dato='168,583' icon='fa-graduation-cap'/>
                <Tarjeta nombre='Postulaciones' dato='79,613' icon='fa-users'/>
              </Row>
              <Row>
                <SectionLeft/>
                <SectionRight/>

                {/* right col (We are only adding the ID to make the widgets sortable)*/}
             
                {/* right col */}
              </Row>
              {/* /.row (main row) */}
            </Container>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
