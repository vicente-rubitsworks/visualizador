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

export default function Comunas(props) {
  const { url_base, column, color } = props;
  const url = `${url_base}/total/`;
  const [query, setQuery] = useState();

  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variable: column,
      }),
    });
    const responseJSON = await response.json();
    setQuery(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  var array = new Set();
  const scores = [];

  for (var a in query) {
    console.log(query[a]);
    const lista2 = [];
    for (var b in query[a].RBD) {
      var nose = query[a].RBD[b];
      console.log(query[a].RBD[b]);
      lista2.push(nose);

      {
        /**  Añadiendo los nombres de las comunas al set **/
      }
      array.add(b);
    }
    scores.push(lista2);
  }
  console.log(scores);

  const colors = [
    `rgba(${color},0.3)`,
    `rgba(${color},0.5)`,
    `rgba(${color},0.7)`,
    `rgba(${color},0.9)`,
  ];
  const data = {
    labels: Array.from(array),
    datasets: [
      {
        label: "2018",
        data: scores[0],
        borderColor: colors[0],
        backgroundColor: colors[0],
        fill: true,
      },
      {
        label: "2019",
        data: scores[1],
        borderColor: colors[1],
        backgroundColor: colors[1],
        fill: true,
      },
      {
        label: "2020",
        data: scores[2],
        borderColor: colors[2],
        backgroundColor: colors[2],
        fill: true,
      },
      {
        label: "2021",
        data: scores[3],
        borderColor: colors[3],
        backgroundColor: colors[3],
        fill: true,
      },
    ],
  };

  return (
    <Bar
      data={data}
      height={200}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  );
}
