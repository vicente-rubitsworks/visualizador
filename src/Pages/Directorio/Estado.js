import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Estado(props) {
    const {cambio}=props
  const url = "https://analizador-backend.herokuapp.com/directorio/estados/";
  const [estados, setEstados] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstados(responseJSON);
  };

  const labels = [];
  const scores = [];

  for (var a in estados) {
    labels.push(estados[a].cod);
    scores.push(estados[a].total);
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
  useEffect(() => {
    fetchApi();
  }, []);


  if(cambio){
    return (
        <Bar
          data={data}
          plugins={[ChartDataLabels]}
          height={200}
          options={{ maintainAspectRatio: false }}
        />
      );
  }
  return (
    <Pie
      data={data}
      plugins={[ChartDataLabels]}
      height={200}
      options={{ maintainAspectRatio: false }}
    />
  );
}
