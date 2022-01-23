import React from 'react';
import Figure from './Figure';
import FigureComplex from './FigureComplex';

export default function Section() {
  return (               
    <section className="col-lg-7 connectedSortable">
      {/* Custom tabs (Charts with tabs)*/}
      <Figure></Figure>
      <FigureComplex></FigureComplex>

    </section>
    );
}
