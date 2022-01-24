import React , { useState, useEffect } from "react";
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
  const url ='https://analizador-backend.herokuapp.com/directorio/comunas/'
  const [todos, setTodos]=useState()
  const fetchApi= async () =>{
    const response =await fetch(url)
    const responseJSON=await response.json()
    setTodos(responseJSON)
  }

  const labels = [];
  const scores = [];
  
  for (var a in todos){
    console.log(todos[a].content)
    labels.push(todos[a].label)
    scores.push(todos[a].content)
    
  }
  
  const data = {
    labels,
    datasets: [
      {
        label: "Mis datos",
        data: scores,
        backgroundColor: 'rgba(210,177,144,0.9)',
      },
    ],
  };
  useEffect(() => {
    fetchApi()
  }, [])
 
  return <Bar data={data} height={250} options={{maintainAspectRatio: false}}  />;
}
