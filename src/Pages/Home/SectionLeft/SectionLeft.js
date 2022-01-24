import React from "react";


export default function Section(props) {
  const {children}= props
  return (
    <section className="col-lg-7 connectedSortable">
      {children}
    </section>
  );
}
