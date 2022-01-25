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

export default function RuralidadComuna(props) {
  const { cambio } = props;
  const arbitraryStackKey = "stack1";
  const arbitraryStackKey2 = "stack2";

  const url =
    "https://analizador-backend.herokuapp.com/directorio/ruralidad-comuna/";
  const [comuna, setComuna] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setComuna(responseJSON);
  };

  const labels = [];
  const valor_rural = [];
  const valor_urbano = [];

  for (var a in comuna) {
    if (!labels.includes(comuna[a].cod)) {
      labels.push(comuna[a].cod);
    }
    if (comuna[a].rural == 0) {
      valor_urbano.push(comuna[a].total);
    } else {
      valor_rural.push(comuna[a].total);
    }
  }
  const data = {
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
        backgroundColor: "rgb(172,1,52,0.9)",
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
              stack: arbitraryStackKey,
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
        }}
        height={250}
        options={{ maintainAspectRatio: false }}
      />
    );
  }

  return (
    <Bar
      height={250}
      options={{ maintainAspectRatio: false }}
      data={{
        labels,
        datasets: [
          {
            stack: arbitraryStackKey,
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
