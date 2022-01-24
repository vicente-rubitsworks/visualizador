import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap'
import Tarjeta from '../../Component/Tarjeta';
import SectionLeft from '../Home/SectionLeft';
import CardFigure from '../../Component/CardFigure';
import ChartDependencias from './ChartDependencias';
import SectionRight from '../Home/SectionRight';
import DependenciasRurales from './DependenciasRurales';
import Header from '../../Component/Header';
import Menu from '../../Component/Menu';
import DirectorioComunas from './DirectorioComunas'

export default function Directorio() {
    const url ='https://analizador-backend.herokuapp.com/directorio/total/'
    const [algo, setAlgo]=useState()
    const fetchApi= async () =>{
      const response =await fetch(url)
      const responseJSON=await response.json()
      setAlgo(responseJSON)
      
    }
    useEffect(() => {
        fetchApi()
      }, [])

      const lista=[]
      for(const a in algo){
  lista.push(algo[a])
      }

  return (
    <div className="wrapper">
    <Header />
    <Menu />
      <div className='content-wrapper'>
          <section className='content'>
              <Container fluid>
                  <Row>
                    <Tarjeta nombre='Establecimientos' dato={lista[0]} icon='fa-building'/>
                    <Tarjeta nombre='Est. municipales' dato='113' icon='fa-user-graduate'/>
                    <Tarjeta nombre='Comunas' dato='15' icon='fa-city'/>
                  </Row>
                  <Row>
                      <SectionLeft>
                        <CardFigure nombre='Dependencia administrativa por urbanidad'>
                            <DependenciasRurales/>
                        </CardFigure>
                        <CardFigure nombre='Directorio por comunas'>
                            <DirectorioComunas/>
                        </CardFigure>
                      </SectionLeft>
                      <SectionRight>
                      <CardFigure nombre='Dependencia administrativa'>
                            <ChartDependencias/>
                        </CardFigure>
                        <CardFigure nombre='Dependencia administrativa'>
                            <ChartDependencias/>
                        </CardFigure>
                        <CardFigure nombre='Dependencia administrativa'>
                            <ChartDependencias/>
                        </CardFigure>
                      </SectionRight>

                  </Row>
              </Container>
          </section>
      </div>
      </div>
  );
}
