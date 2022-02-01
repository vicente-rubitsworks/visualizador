import React, { useState, useEffect } from "react";
import { Row, Container, Col, InputGroup } from "react-bootstrap";
import Structure from "../../Component/Structure";
import DependenciasRurales from "./DependenciasRurales";
import CardFigure from "../../Component/CardFigure";

export default function Creador(props) {
  const [value, setValue] = useState("");
  {
    /* Variables para las tarjetas */
  }
  return (
    <Structure>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 text-center">
            <div className="col-sm-12">
              <h1 className="m-0"> Creador de graficos </h1>
            </div>

            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <Container fluid>
        <Row>
          <Col lg={3}>
            <InputGroup>
              <label>Ingresa una variable</label>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></input>
            </InputGroup>
          </Col>
          <Col lg={9}>
            <CardFigure>
              <DependenciasRurales value={value}></DependenciasRurales>
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
