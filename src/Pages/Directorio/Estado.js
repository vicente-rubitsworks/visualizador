import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Estado(props) {
  const arbitraryStackKey = "stack1";

  const { cambio, url_base } = props;
  const url = `${url_base}/estados/`;
  const url2 = `${url_base}/ruralidad-estado/`;

  const [estados, setEstados] = useState();
  const [estadoRural, setEstadoRural] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstados(responseJSON);

    const response2 = await fetch(url2);
    const responseJSON2 = await response2.json();
    setEstadoRural(responseJSON2);
  };

  const labels = [];
  const scores = [];
  const valor_rural = [];
  const valor_urbano = [];

  for (var a in estadoRural) {
    if (estadoRural[a].rural === 0) {
      valor_urbano.push(estadoRural[a].total);
    } else {
      valor_rural.push(estadoRural[a].total);
    }
  }
  for (var a in estados) {
    labels.push(estados[a].cod);
    scores.push(estados[a].total);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Est. totales",
        data: scores,
        backgroundColor: [
          "rgba(148,156,196,0.9)",
          "rgba(172,108,52,0.9)",
          "rgba(210,177,144,0.9)",
          "rgba(60,141,188,0.9)",
          "rgba(190,198,220,0.9)",
        ],
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Est. totales",
        data: scores,
        backgroundColor: ["rgba(210,177,144,0.9)"],
      },
      {
        label: "Est. urbanos",
        stack: arbitraryStackKey,

        data: valor_urbano,
        backgroundColor: "rgba(148,156,196,0.9)",
      },
      {
        label: "Est. rurales",
        stack: arbitraryStackKey,

        data: valor_rural,
        backgroundColor: "rgb(172,108,52,0.9)",
      },
    ],
  };
  useEffect(() => {
    fetchApi();
  }, []);

  if (cambio) {
    return (
      <Bar data={data2} height={250} options={{ maintainAspectRatio: false }} />
    );
  }
  return (
    <Bar data={data} height={250} options={{ maintainAspectRatio: false }} />
  );
}
