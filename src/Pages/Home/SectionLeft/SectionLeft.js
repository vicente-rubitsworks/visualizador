import React from "react";
import CardFigure from "./CardFigure";
import ReactChart from "./ReactChart";
import PieChart from "./PieChart";

export default function Section() {
  return (
    <section className="col-lg-7 connectedSortable">
      <CardFigure>
        <ReactChart/>
      </CardFigure>
      <CardFigure>
      <PieChart/>
      </CardFigure>
    </section>
  );
}
