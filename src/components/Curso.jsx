const datos = {
  nombre:'Angel Octavio',
  apellidos: 'López Cruz',
  edad: '29',
  profesion: 'Frontend',
  tecnologias: ['React', 'Tailwind'],
  imagen: './assets/universe.jpg',
  tituloImagen: 'Universo'
}

const mayorEdad = (edad) => {
  const esMayor = edad > 18
  return esMayor
}

export default function Curso() {
  return (
    <article className="flex-1 bg-purple-400">
      <header>
        <img src={datos.imagen} alt={datos.tituloImagen} />
        <h3 className="text-xl" >{datos.nombre}</h3>
        <h3 className="text-xl" >{datos.apellidos}</h3>
        {
          mayorEdad(datos.edad)
          ?
          <h3 className="text-green-600">Soy mayor de edad</h3>
          :
          <h3 className="text-red-600">Soy menor de edad</h3>
        }
      </header>
      <div>
        <h4 className="text-sm" >{datos.profesion}</h4>
      </div>
      <footer>
        <ul className="flex justify-center">
          {
            datos.tecnologias.map((tecnologia)=><li>{tecnologia}</li>)
          }
        </ul>
      </footer>
    </article>
  )
}
