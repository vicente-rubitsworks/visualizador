import React from "react";
import Footer from '../Footer'
import Header from "../Header";
import Menu from '../Menu'

export default function Structure(props) {
  const {children}=props
    return (
    <div className="wrapper">
      {/* Los componentes de la pagina */}
      <Header />
      <Menu />
      {/* Wrapper de la plantilla */}
      <div className="content-wrapper">
        <section className="content">
            {children}
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
