import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Totales(props) {
  const { cambio } = props;
  const arbitraryStackKey = "stack1";
  const arbitraryStackKey2 = "stack2";
  const { url_base } = props;

  const url = `${url_base}/total/`;

  const [query, setQuery] = useState();
  const [estados, setEstados] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setQuery(responseJSON);
  };
  const fetchEstados = async () => {
    const response = await fetch(`${url_base}/estados/`);
    const responseJSON = await response.json();

    setEstados(responseJSON);
  };

  useEffect(() => {
    fetchApi();
    fetchEstados();
  }, []);

  const scores = [];
  const scores1 = [];
  const scores2 = [];
  const scores3 = [];

  for (var a in query) {
    scores.push(query[a].total);
    console.log(a);
  }

  for (var a in estados) {
    scores1.push(estados[a].RBD[1]);
    scores2.push(estados[a].RBD[2]);
    scores3.push(estados[a].RBD[3]);

    console.log(a);
  }
  const colors = [
    "rgba(148,156,196,0.9)",
    "rgba(172,108,52,0.9)",
    "rgba(210,177,144,0.9)",
    "rgba(60,141,188,0.9)",
    "rgba(190,198,220,0.9)",
  ];
  const data1 = {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Est. totales",
        data: scores,
        borderColor: colors[3],
        backgroundColor: colors[3],
        fill: true,
      },
      {
        stack: arbitraryStackKey2,
        label: "Estab. activos",
        data: scores1,
        borderColor: colors[0],
        backgroundColor: colors[0],
        fill: true,
      },
      {
        stack: arbitraryStackKey2,
        label: "Estab. en receso",
        data: scores2,
        borderColor: colors[1],
        backgroundColor: colors[1],
        fill: true,
      },
      {
        stack: arbitraryStackKey2,
        label: "Estab. cerrados",
        data: scores3,
        backgroundColor: colors[2],
        borderColor: colors[2],
        fill: true,
      },
    ],
  };
  const data2 = {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Est. totales",
        data: scores,
        borderColor: colors[3],
        backgroundColor: colors[3],
        fill: true,
      },
      {
        label: "Estab. activos",
        data: scores1,
        borderColor: colors[0],
        backgroundColor: colors[0],
        fill: true,
      },
      {
        label: "Estab. en receso",
        data: scores2,
        borderColor: colors[1],
        backgroundColor: colors[1],
        fill: true,
      },
      {
        label: "Estab. cerrados",
        data: scores3,
        backgroundColor: colors[2],
        borderColor: colors[2],
        fill: true,
      },
    ],
  };
  if (cambio) {
    return (
      <Bar data={data1} height={200} options={{ maintainAspectRatio: false}} />
    );
  }
  return (
    <Line data={data2} height={200} options={{ maintainAspectRatio: false}} />
  );
}
