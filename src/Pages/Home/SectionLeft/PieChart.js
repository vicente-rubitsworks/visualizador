import React from "react";
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

export default function ReactChart() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const scores = [1, 2, 3, 4, 5, 6, 7];

  const data = {
    labels,
    datasets: [
      {
        label: "Mis datos",
        data: scores,
      },
    ],
  };
  return <Bar data={data} options={{ responsive: true }} />;
}
