import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import CardFigure from "../../Component/CardFigure";
import Structure from "../../Component/Structure";
import Dependencias from "./Dependencias";
import Urbanismo from "./Urbanismo";
import Comunas from "./Comunas";
import Generos from "./Generos";

export default function Matrículas(props) {
  {
    /* Variables para las tarjetas */
  }
  const { anio = 2020 } = props;
  const base_url = `https://analizador-backend.herokuapp.com/matriculas/${anio}`;
  const url = `${base_url}/total/`;
  const url2 = `${base_url}/numero-de-establecimientos/`;
  const url3 = `${base_url}/matriculas-municipales/`;

  const [estTotales, setEstTotales] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstTotales(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const [estMunicipales, setEstMunicipales] = useState();
  const fetchApiMun = async () => {
    const response = await fetch(url3);
    const responseJSON = await response.json();
    setEstMunicipales(responseJSON);
  };
  useEffect(() => {
    fetchApiMun();
  }, []);
  const [est, setEst] = useState();
  const fetchApiEst = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setEst(responseJSON);
  };
  useEffect(() => {
    fetchApiEst();
  }, []);
  const lista = [];
  for (const a in estTotales) {
    lista.push(estTotales[a]);
  }
  const lista_muni = [];
  for (const a in estMunicipales) {
    lista_muni.push(estMunicipales[a]);
  }
  const lista_est = [];
  for (const a in est) {
    lista_est.push(est[a]);
  }

  {
    /* Estados de los graficos */
  }
  const [started, setStarted] = useState();
  const [urbano, setUrbano] = useState();
  const click = () => {
    setStarted(!started);
  };
  const urban = () => {
    setUrbano(!urbano);
  };

  return (
    <Structure>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 text-center">
            <div className="col-sm-12">
              <h1 className="m-0">Matrículas del año {anio}</h1>
            </div>

            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>

      <Container fluid>
        {/* Tarjetas iniciales*/}
        <Row>
          <Tarjeta
            nombre="Matrículas"
            dato={lista[0]}
            icon="fa-user-graduate"
          />
          <Tarjeta
            nombre="Alumnos municipales"
            dato={lista_muni[0]}
            icon="fa-building "
          />
          <Tarjeta nombre="Comunas" dato="15" icon="fa-city" />
        </Row>
        <Row>
          <Col>
            <CardFigure
              nombre={"Matrículas por directorio"}
              icono="fas fa-chart-bar mr-2"
            >
              <Comunas url_base={base_url}></Comunas>
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col xl={7}>
            <CardFigure
              nombre={"Matrículas por dependencia"}
              icono="fas fa-chart-bar mr-2"
            >
              <Dependencias url_base={base_url}></Dependencias>
            </CardFigure>
          </Col>
          <Col xl={5}>
            <CardFigure
              nombre={"Matrículas por urbanismo"}
              icono="fas fa-chart-pie mr-2"
            >
              <Urbanismo url_base={base_url}></Urbanismo>
            </CardFigure>
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            <CardFigure
              icono="fas fa-chart-pie mr-2"
              nombre={"Matrículas por géneros"}
            >
              <Generos url_base={base_url}></Generos>
            </CardFigure>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </Structure>
  );
}
