import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartDependencias(props) {
  const { cambio, url_base } = props;
  const url = `${url_base}/matriculas-por-dependencias/`;
  const [matriculas, setMatriculas] = useState();
  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "GET",
    });
    const responseJSON = await response.json();
    setMatriculas(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const labels = [];
  const scores = [];
  console.log(matriculas);

  for (var a in matriculas) {
    labels.push(matriculas[a].cod);
    scores.push(matriculas[a].total);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Mis datos",
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

    return (
      <Bar
        data={data}
        plugins={[ChartDataLabels]}
        height={250}
        options={{ maintainAspectRatio: false }}
      />
    );

 
}
