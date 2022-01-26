import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DependenciasRurales(props) {
  const {cambio, url_base}=props
  const url =`${url_base}/dependencia-rural/`
  const [nada, setNada] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setNada(responseJSON);
  };

  const labels = [];
  const valor_rural = [];
  const valor_urbano = [];

  for (var a in nada) {
    if (!labels.includes(nada[a].cod)) {
      labels.push(nada[a].cod);
    }
    if (nada[a].rural === 0) {
      valor_urbano.push(nada[a].total);
    } else {
      valor_rural.push(nada[a].total);
    }
  }
  const data_dos = {
    labels,
    datasets: [
      {
        label: "Est. urbanos",
        data: valor_urbano,
        backgroundColor: "rgba(148,156,196,0.9)",
      },
      {
        label: "Est. rurales",
        data: valor_rural,
        backgroundColor: "rgb(172,108,52,0.9)",
      },
    ],
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Bar
      height={250}
      options={{ maintainAspectRatio: false }}
      data={data_dos}
    />
  );
}
