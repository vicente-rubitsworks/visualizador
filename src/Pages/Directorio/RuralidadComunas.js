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
  const { cambio, url_base } = props;
  const arbitraryStackKey = "stack1";
  const arbitraryStackKey2 = "stack2";

  const url = `${url_base}/ruralidad-comuna/`;
  const url2 = `${url_base}/comunas/`;

  const [comuna, setComuna] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setComuna(responseJSON);
  };
  const [todos, setTodos] = useState();
  const fetchApi2 = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  const labels = [];
  const valor_rural = [];
  const valor_urbano = [];
  const scores = [];

  for (var a in todos) {
    scores.push(todos[a].content);
  }

  for (var a in comuna) {
    if (!labels.includes(comuna[a].cod)) {
      labels.push(comuna[a].cod);
    }
    if (comuna[a].rural === 0) {
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
    ],
  };
  useEffect(() => {
    fetchApi();
    fetchApi2();
  }, []);

  console.log(todos);
  if (cambio) {
    return (
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "Est. totales",
              data: scores,
              backgroundColor: "rgba(210,177,144,0.9)",
            },

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
            label: "Est. totales",
            data: scores,
            backgroundColor: "rgba(210,177,144,0.9)",
          },
        ],
      }}
    />
  );
}
