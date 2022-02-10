import React from "react";
import { Col, Card } from "react-bootstrap";

export default function CardFigureCreator(props) {
  const { children, nombre, icono, click } = props;
  return (
    <Card>
      <Card.Header>
        <h3 className="card-title">
          <i className={icono} />
          {nombre}
        </h3>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}
