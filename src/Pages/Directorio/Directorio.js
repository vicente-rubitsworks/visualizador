import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import SectionLeft from "../Home/SectionLeft";
import CardFigure from "../../Component/CardFigure";
import ChartDependencias from "./Dependencias";
import SectionRight from "../Home/SectionRight";
import DependenciasRurales from "./DependenciasRurales";
import Header from "../../Component/Header";
import Menu from "../../Component/Menu";
import DirectorioComunas from "./DirectorioComunas";
import Estado from "./Estado";
import RuralidadComuna from "./RuralidadComunas";
import EstadosRurales from "./EstadosRurales";
import Footer from "../../Component/Footer";

export default function Directorio() {
  const url = "https://analizador-backend.herokuapp.com/directorio/total/";
  const [estTotales, setEstTotales] = useState();
  const [started, setStarted] = useState();
  const [urbano, setUrbano] = useState();
  var depe = true;
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstTotales(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const lista = [];
  for (const a in estTotales) {
    lista.push(estTotales[a]);
  }

  const click = () => {
    setStarted(!started);
  };
  const urban = () => {
    setUrbano(!urbano);
  };

  return (
    <div className="wrapper">
      {/* Los componentes de la pagina */}
      <Header />
      <Menu />
      {/* Wrapper de la plantilla */}
      <div className="content-wrapper">
        <section className="content">
          <Container fluid>
            {/* Tarjetas iniciales*/}
            <Row>
              <Tarjeta
                nombre="Establecimientos"
                dato={lista[0]}
                icon="fa-building"
              />
              <Tarjeta
                nombre="Est. municipales"
                dato="420"
                icon="fa-user-graduate"
              />
              <Tarjeta nombre="Comunas" dato="15" icon="fa-city" />
            </Row>
            {/* Graficos */}
            <Row>
              <Col className="connectedSortable">
                {/* Comunas y urbanidad */}
                <CardFigure
                  click={urban}
                  nombre="Comunas y urbanidad"
                  icono="fas fa-chart-bar mr-2"
                >
                  <RuralidadComuna cambio={urbano}></RuralidadComuna>
                </CardFigure>
              </Col>
            </Row>
            <Row>
              <Col className="connectedSortable" lg={7}>
                {/* Estado de los establecimiento y urbanidad*/}
                <CardFigure
                  nombre="Estado de los establecimiento y urbanidad"
                  icono="fas fa-chart-bar mr-2"
                >
                  <EstadosRurales />
                </CardFigure>
              </Col>{" "}
              <Col className="connectedSortable" lg={5}>
                {/* Dependencia administrativa por urbanidad */}
                <CardFigure
                  nombre="Dependencia administrativa por urbanidad"
                  icono="fas fa-chart-bar mr-2"
                >
                  <DependenciasRurales />
                </CardFigure>
              </Col>
            </Row>
            <Row>
              <Col className="connectedSortable" lg={5}>
                {/* Directorio por comunas */}
                <CardFigure
                  nombre="Directorio por comunas"
                  icono="fas fa-chart-bar mr-2"
                >
                  <DirectorioComunas />
                </CardFigure>
              </Col>{" "}
              <Col className="connectedSortable" lg={7}>
                {/* Dependencia administrativa */}
                <CardFigure
                  click={() => {
                    depe = !depe;
                  }}
                  nombre="Dependencia administrativa"
                  icono="fas fa-chart-pie mr-2"
                >
                  <ChartDependencias cambio={depe} />
                </CardFigure>
              </Col>
            </Row>
            <Row>
              <Col className="connectedSortable">
                {/* Estado de establecimientos */}
                <CardFigure
                  click={click}
                  nombre="Estado de los establecimientos"
                  icono="fas fa-chart-pie mr-2"
                >
                  <Estado cambio={started}></Estado>
                </CardFigure>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
