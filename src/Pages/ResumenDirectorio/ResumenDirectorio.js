import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Tarjeta from "../../Component/Tarjeta";
import CardFigure from "../../Component/CardFigure";
import Structure from "../../Component/Structure";

export default function ResumenDirectorio(props) {
  {
    /* Variables para las tarjetas */
  }
  const { anio = 2021 } = props;
  const base_url = `http://analizador-backend.herokuapp.com/directorio/${anio}`;
  const url = `${base_url}/total/`;
  const url2 = `${base_url}/municipales/`;

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
          <Tarjeta
            nombre="Est. urbanos"
            dato={610}
            icon="fa-user-graduate"
          />
          <Tarjeta nombre="Comunas" dato="15" icon="fa-city" />
        </Row>
        {/* Graficos */}

      </Container>
    </Structure>
  );
}
