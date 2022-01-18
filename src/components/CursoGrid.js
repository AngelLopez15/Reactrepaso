import React from 'react'
import Curso4 from './Curso4'

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

export default function CursoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        cursos.map( (item) => (
          <Curso4 
            key={item.id}
            id={item.id}
            title={item.title}
            imagen={item.imagen}
            price={item.price}
            prof={item.prof}
          />
        ))
      }
    </div>
  )
}
