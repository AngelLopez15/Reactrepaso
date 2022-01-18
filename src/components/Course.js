import React from 'react'
import { useParams } from "react-router-dom"

const cursos = [
  {
    id: 1,
    title: 'React desde cero',
    imagen: './assets/universe.jpg',
    price: '1000MNX',
    prof: 'Angel'
  },
  {
    id: 2,
    title: 'React intermedio',
    imagen: './assets/universe.jpg',
    price: '1100MNX',
    prof: 'Octavio'
  },
  {
    id: 3,
    title: 'React avanzado',
    imagen: './assets/universe.jpg',
    price: '1200MNX',
    prof: 'López'
  },
  {
    id: 4,
    title: 'React Master',
    imagen: './assets/universe.jpg',
    price: '1300MNX',
    prof: 'Cruz'
  }
]

function Course() {
  let params = useParams()
  // console.log(params)

  const cursoActual = cursos.filter( curso => curso.id === parseInt(params.id))[0]
  // console.log(cursoActual)

  return (
    <>
      {
        cursoActual 
        ? 
          <div>
            <h1>Curso: { cursoActual.title } </h1>
            <p>Profesor: { cursoActual.prof }</p>
          </div>
        : 
          <p>Curso no existe</p>
      }
    </>
  )
}

export default Course
