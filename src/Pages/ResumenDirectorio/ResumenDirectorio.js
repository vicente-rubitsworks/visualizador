import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import CardFigure from "../../Component/CardFigure";
import Structure from "../../Component/Structure";
import Totales from "./Totales";
import Comunas from "./Comunas";

export default function ResumenDirectorio(props) {
  {
    /* Variables para las tarjetas */
  }
  const [started, setStarted] = useState();
  const click = () => {
    setStarted(!started);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const base_url = `http://analizador-backend.herokuapp.com/evolucion/directorio/`;

  return (
    <Structure>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Espere mientras se cargan los datos.</Modal.Title>
          </Modal.Header>
          <Modal.Body>¡Usualmente se demora solo unos segundos !</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 text-center">
            <div className="col-sm-12">
              <h1 className="m-0">Resumen del directorio</h1>
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
          <Tarjeta nombre="Crecimiento" icon="fa-building" />
          <Tarjeta nombre="Est. municipales" icon="fa-user-graduate" />
          <Tarjeta nombre="Est. urbanos" icon="fa-user-graduate" />
        </Row>
        {/* Graficos */}
        <Row>
          <Col className="connectedSortable">
            <CardFigure
              nombre="Evolucion del directorio"
              icono="fas fa-chart-line mr-2"
              click={click}
            >
              <Totales
                cambio={started}
                url_base={"http://analizador-backend.herokuapp.com/evolucion/directorios"}
              />
            </CardFigure>
          </Col>
          <Col className="connectedSortable"></Col>
        </Row>
        <Row>
          <Col className="connectedSortable">
            <CardFigure
              nombre="Evolucion del directorio por comunas"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={"http://analizador-backend.herokuapp.com/evolucion/directorios"}
              />
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
