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
          <Col lg={7} className="connectedSortable">
            <CardFigure
              nombre="Evolución del directorio"
              icono="fas fa-chart-line mr-2"
              click={click}
            >
              <Totales
                cambio={started}
                url_base={
                  "http://analizador-backend.herokuapp.com/evolucion/directorios"
                }
              />
            </CardFigure>
          </Col>
          <Col lg={5} className="connectedSortable">
            <CardFigure
              nombre="Evolución del estado urbano"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://analizador-backend.herokuapp.com/evolucion/directorios"
                }
                column={"RURAL_RBD"}
                color={"172,108,52"}
              />
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col className="connectedSortable">
            <CardFigure
              nombre="Evolución del directorio por comunas"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://analizador-backend.herokuapp.com/evolucion/directorios"
                }
                column={"NOM_COM_RBD"}
                color={"60, 141, 188"}
              />
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="connectedSortable">
            {" "}
            <CardFigure
              nombre="Evolución del directorio por dependencia adm."
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://analizador-backend.herokuapp.com/evolucion/directorios"
                }
                column={"COD_DEPE2"}
                color={"190,198,220"}
              />
            </CardFigure>
          </Col>
          <Col lg={7} className="connectedSortable">
            {" "}
            <CardFigure
              nombre="Evolución del directorio por dep. adm. resumida"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://analizador-backend.herokuapp.com/evolucion/directorios"
                }
                column={"COD_DEPE"}
                color={"210,177,144"}
              />
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
