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
  const { cambio, url_base , value='NOM_COM_RBD'} = props;
  const labels = [];
  const [todos, setTodos] = useState();
  const scores = [];
  console.log(value)
  const [prevValue, setPrevValue] = useState();


  const getComunas = async () => {
    try {
      const response = await fetch(
        url_base,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            col: value,
          }),
        }
      );
      const json = await response.json();
      setTodos(json);

      return json;
    } catch (error) {
      console.error(error);
    }
  };
  for (var a in todos) {
    labels.push(todos[a].cod);
    scores.push(todos[a].total);
  }
  console.log(todos);

  useEffect(() => {
    setPrevValue(value)
    console.log(prevValue)
    getComunas();
  }, []);

  if (prevValue != value){
      setPrevValue(value)
      console.log(prevValue)
      getComunas();
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
    <Bar height={250} options={{ maintainAspectRatio: false }} data={data} />
  );
}
