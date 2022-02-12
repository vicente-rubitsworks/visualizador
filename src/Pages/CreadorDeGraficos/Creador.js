import React, { useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
  InputGroup,
  Modal,
  Button,
} from "react-bootstrap";
import Structure from "../../Component/Structure";
import DependenciasRurales from "./DependenciasRurales";
import CardFigure from "../../Component/CardFigureCreator";

export default function Creador(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const { url, columns } = props;
  const [valu, setValu] = useState("NONE");
  const [todos, setTodos] = useState();
  const getColumnas = async () => {
    try {
      const response = await fetch(columns, {
        method: "GET",
      });
      const json = await response.json();
      setTodos(json);
      setShow(false);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const options = [{ value: "NONE", label: "NONE" }];
  useEffect(() => {
    getColumnas();
  }, []);
  for (var dato in todos) {
    options.push({ value: todos[dato].nombre, label: todos[dato].nombre });
  }

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
              <select
                value={valu}
                onChange={(e) => setValu(e.target.value)}
                placeholder="NONE"
              >
                {options.map(({ value, label }, index) => (
                  <option value={value}>{label}</option>
                ))}
              </select>
            </InputGroup>
          </Col>
          <Col lg={9}>
            <CardFigure nombre={valu} icono={"fas fa-chart-bar mr-1"}>
              <DependenciasRurales
                url_base={url}
                value={valu}
              ></DependenciasRurales>
            </CardFigure>
          </Col>
        </Row>
      </Container>
    </Structure>
  );
}
