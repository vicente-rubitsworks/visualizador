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

export default function EstadosRurales(props) {
  const arbitraryStackKey = "stack1";
  const arbitraryStackKey2 = "stack2";
  const { cambio, url_base } = props;
  const url = `${url_base}/ruralidad-estado/`;
  const [estado, setEstado] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEstado(responseJSON);
  };

  const labels = [];
  const valor_rural = [];
  const valor_urbano = [];

  for (var a in estado) {
    if (!labels.includes(estado[a].cod)) {
      labels.push(estado[a].cod);
    }
    if (estado[a].rural === 0) {
      valor_urbano.push(estado[a].total);
    } else {
      valor_rural.push(estado[a].total);
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
        stack: arbitraryStackKey,
        label: "Est. rurales",
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
      <Bar
        height={250}
        options={{ maintainAspectRatio: false }}
        data={{
          labels,
          datasets: [
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
      />
    );
  }
  return (
    <Bar
      height={250}
      options={{ maintainAspectRatio: false }}
      data={data_dos}
    />
  );
}
