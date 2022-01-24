import React from "react";
import Map from "./Map";

export default function SectionRight(props) {
  const {children}= props
  return (
    <section className="col-lg-5 connectedSortable">
      {children}
    </section>
  );
}
