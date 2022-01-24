import React , {useState, useEffect} from 'react';
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

export default function DependenciasRurales() {
    const url ='https://analizador-backend.herokuapp.com/directorio/dependencia-rural/'
    const [nada, setNada]=useState()
    const fetchApi= async () =>{
      const response =await fetch(url)
      const responseJSON=await response.json()
      console.log(responseJSON)
      setNada(responseJSON)
    }
  
    const labels = [];
    const valor_rural = [];
    const valor_urbano = [];
    
    for (var a in nada){
      console.log(nada[a])
      console.log(nada[a].cod)

      if(!labels.includes(nada[a].cod)){
        labels.push(nada[a].cod)
      }
      if(nada[a].rural == 0){
        valor_urbano.push(nada[a].total)
      }
      else {
          valor_rural.push(nada[a].total)
      }
      
    }
    valor_rural.splice(2,0,0)
    const data_dos = {
      labels,
      datasets: [
        {
            label: "Mis datos",
            data: valor_rural,
            backgroundColor: 'rgb(172,108,52)',
          },
        {
            label: "Mis datos pero en rojo",
            data: valor_urbano,
            backgroundColor: '#ff0000',
          },
      ],
    };
    useEffect(() => {
      fetchApi()
    }, [])
   console.log(data_dos)
    return <Bar data={data_dos} />;
  }
  