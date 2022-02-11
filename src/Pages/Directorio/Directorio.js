import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
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
  const { anio = 2021 } = props;
  const base_url = `https://analizador-backend.herokuapp.com/directorio/${anio}`;
  const url = `${base_url}/total/`;
  const url2 = `${base_url}/municipales/`;

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [estTotales, setEstTotales] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstTotales(responseJSON);
    setShow(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const [estMunicipales, setEstMunicipales] = useState();
  const fetchApiMun = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setEstMunicipales(responseJSON);
  };
  useEffect(() => {
    fetchApiMun();
  }, []);
  const lista = [];
  for (const a in estTotales) {
    lista.push(estTotales[a]);
  }
  const lista_muni = [];
  for (const a in estMunicipales) {
    lista_muni.push(estMunicipales[a]);
  }
  {
    /* Estados de los graficos */
  }
  const [started, setStarted] = useState();
  const [urbano, setUrbano] = useState();
  const [urbano2, setUrbano2] = useState();
  const [estados, setEstados] = useState();
  const [dependencias, setDependencias] = useState();

  const depe = () => {
    setDependencias(!dependencias);
  };
  const estad = () => {
    setEstados(!estados);
  };
  const click = () => {
    setStarted(!started);
  };
  const urban = () => {
    setUrbano(!urbano);
  };
  const urban2 = () => {
    setUrbano2(!urbano2);
  };

  return (
    <Structure>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Se estan cargando los datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>Usualmente se demora unos segundos !</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 text-center">
            <div className="col-sm-12">
              <h1 className="m-0">Directorio del año {anio}</h1>
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
            nombre="Establecimientos"
            dato={lista[0]}
            icon="fa-building"
          />
          <Tarjeta
            nombre="Est. municipales"
            dato={lista_muni[0]}
            icon="fa-user-graduate"
          />
          <Tarjeta nombre="Est. urbanos" dato={610} icon="fa-user-graduate" />
          <Tarjeta nombre="Comunas" dato="15" icon="fa-city" />
        </Row>
        {/* Graficos */}
        <Row>
          <Col className="connectedSortable">
            {/* Comunas y urbanismo */}
            <CardFigure
              click={urban}
              nombre="Comunas y urbanismo"
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
            {/* Estado de establecimientos */}
            <CardFigure
              click={click}
              nombre="Estado de los establecimientos"
              icono="fas fa-chart-pie mr-2"
            >
              <Estado cambio={started} url_base={base_url}></Estado>
            </CardFigure>
          </Col>
          <Col className="connectedSortable" lg={5}>
            {/* Estado de los establecimiento y urbanismo*/}
            <CardFigure
              nombre="Dependencia adm. por urbanismo"
              icono="fas fa-chart-bar mr-2"
              click={urban2}
            >
              <DependenciasRurales url_base={base_url} cambio={urbano2} />
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col className="connectedSortable" lg={5}>
            {/* Dependencia administrativa por urbanismo */}
            <CardFigure
              nombre="Estado de los estab. y urbanismo"
              icono="fas fa-chart-bar mr-2"
              click={estad}
            >
              <EstadosRurales url_base={base_url} cambio={estados} />
            </CardFigure>
          </Col>
          <Col className="connectedSortable" lg={7}>
            {/* Dependencia administrativa */}
            <CardFigure
              nombre="Dependencia administrativa"
              icono="fas fa-chart-pie mr-2"
              click={depe}
            >
              <ChartDependencias url_base={base_url} cambio={dependencias} />
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
