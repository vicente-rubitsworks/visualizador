import React from "react";
import { Col, Card } from "react-bootstrap";
import ReactChart from "../Pages/Home/SectionLeft/ReactChart";

export default function CardFigure(props) {
    const {children, nombre, icono} = props
  return (
    <Card>
      <Card.Header>
        <h3 className="card-title">
          <i className={icono} />
          {nombre}
        </h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn bg-info btn-sm"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus" />
          </button>
          <button
            type="button"
            className="btn bg-info btn-sm"
            data-card-widget="remove"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}
