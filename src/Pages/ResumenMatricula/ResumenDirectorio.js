import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import CardFigure from "../../Component/CardFigure";
import Structure from "../../Component/Structure";
import Totales from "./Totales";
import Comunas from "./Comunas";

export default function ResumenMatricula(props) {
  {
    /* Variables para las tarjetas */
  }
  const [started, setStarted] = useState();
  const click = () => {
    setStarted(!started);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const base_url = `http://127.0.0.1:8000/evolucion/matriculas/`;

  const url = `${base_url}/total/`;
  const [query, setQuery] = useState();

  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variable: "RURAL_RBD",
      }),
    });
    const responseJSON = await response.json();
    setQuery(responseJSON);
    setShow(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);

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
              <h1 className="m-0">Resumen de la matrícula</h1>
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
          <Col lg={7} className="connectedSortable text-center">
            <p>¿ Cómo ha evolucionado el directorio en los últimos años ?</p>
            <CardFigure
              nombre="Evolución de la matrícula"
              icono="fas fa-chart-line mr-2"
              click={click}
            >
              <Totales
                cambio={started}
                url_base={
                  "http://127.0.0.1:8000/evolucion/matriculas"
                }
              />
            </CardFigure>
          </Col>
          <Col lg={5} className="connectedSortable text-center">
            <p>¿ Cuanto han cambiado las matrículas por sector rural ?</p>
            <CardFigure
              nombre="Evolución del los establecimientos rurales"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://127.0.0.1:8000/evolucion/matriculas"
                }
                column={"RURAL_RBD"}
                color={"172,108,52"}
              />
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col className="connectedSortable text-center">
            <p>¿ Cuanto han cambiado las matrículas en cada comuna ?</p>
            <CardFigure
              nombre="Evolución de la matrícula por comunas"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://127.0.0.1:8000/evolucion/matriculas"
                }
                column={"NOM_COM_RBD"}
                color={"60, 141, 188"}
              />
            </CardFigure>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="connectedSortable text-center">
            {" "}
            <p>¿Cómo ha cambiado cada tipo administración?</p>
            <CardFigure
              nombre="Dependencia administrativa"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://127.0.0.1:8000/evolucion/matriculas"
                }
                column={"COD_DEPE2"}
                color={"190,198,220"}
              />
            </CardFigure>
          </Col>
          <Col lg={7} className="connectedSortable text-center">
            {" "}
            <p>¿Cómo ha cambiado cada tipo administración?</p>
            <CardFigure
              nombre="Evolución de la matrícula por dep. adm. resumida"
              icono="fas fa-chart-line mr-2"
            >
              <Comunas
                url_base={
                  "http://127.0.0.1:8000/evolucion/matriculas"
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
