import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartDependencias(props) {
  const { cambio, url_base } = props;
  const arbitraryStackKey2 = "stack2";

  const url = `${url_base}/dependencia/`;
  const url2 = `${url_base}/dependencia-rural/`;

  const [todos, setTodos] = useState();
  const [nada, setNada] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    const response2 = await fetch(url2);
    const responseJSON2 = await response2.json();
    setNada(responseJSON2);
  };

  const labels = [];
  const scores = [];
  const valor_rural = [];
  const valor_urbano = [];
  for (var a in nada) {
    if (nada[a].rural === 0) {
      valor_urbano.push(nada[a].total);
    } else {
      valor_rural.push(nada[a].total);
    }
  }

  for (var a in todos) {
    labels.push(todos[a].cod);
    scores.push(todos[a].total);
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
  useEffect(() => {
    fetchApi();
  }, []);

  if (cambio) {
    return (
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "Est. totales",
              data: scores,
              backgroundColor: ["rgba(210,177,144,0.9)"],
            },
            {
              stack: arbitraryStackKey2,
              label: "Est. urbanos",
              data: valor_urbano,
              backgroundColor: "rgba(148,156,196,0.9)",
            },
            {
              stack: arbitraryStackKey2,
              label: "Est. rurales",
              data: valor_rural,
              backgroundColor: "rgb(172,108,52,0.9)",
            },
          ],
        }}
        height={250}
        options={{ maintainAspectRatio: false }}
      />
    );
  }

  return (
    <Bar data={data} height={250} options={{ maintainAspectRatio: false }} />
  );
}
