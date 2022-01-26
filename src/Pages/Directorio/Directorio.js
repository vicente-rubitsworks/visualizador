import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import CardFigure from "../../Component/CardFigure";
import ChartDependencias from "./Dependencias";
import DependenciasRurales from "./DependenciasRurales";
import DirectorioComunas from "./DirectorioComunas";
import Estado from "./Estado";
import RuralidadComuna from "./RuralidadComunas";
import EstadosRurales from "./EstadosRurales";
import Structure from "../../Component/Structure";

export default function Directorio(props) {
  {
    /* Variables para las tarjetas */
  }
  const {anio=2021}=props
  const base_url = `https://analizador-backend.herokuapp.com/directorio/${anio}`;
  const url =`${base_url}/total/`
  const [estTotales, setEstTotales] = useState();
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
              <RuralidadComuna
                cambio={urbano}
                url_base={base_url}
              ></RuralidadComuna>
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col className="connectedSortable" lg={7}>
            {/* Estado de los establecimiento y urbanidad*/}
             <CardFigure
              nombre="Dependencia administrativa por urbanidad"
              icono="fas fa-chart-bar mr-2"
            >
              <DependenciasRurales url_base={base_url} />
            </CardFigure>
          </Col>{" "}
          <Col className="connectedSortable" lg={5}>
            {/* Dependencia administrativa por urbanidad */}
           <CardFigure
              nombre="Estado de los establecimiento y urbanidad"
              icono="fas fa-chart-bar mr-2"
            >
              <EstadosRurales url_base={base_url} />
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
              <DirectorioComunas url_base={base_url} />
            </CardFigure>
          </Col>{" "}
          <Col className="connectedSortable" lg={7}>
            {/* Dependencia administrativa */}
            <CardFigure
              nombre="Dependencia administrativa"
              icono="fas fa-chart-pie mr-2"
            >
              <ChartDependencias url_base={base_url} />
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
              <Estado cambio={started} url_base={base_url}></Estado>
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
