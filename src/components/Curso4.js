import PropTypes from 'prop-types'

// Renderizando el componente con Props

export default function Curso4(props) {
  // desestructurando las props
  // Se puede desestructurar directamente en los parentesis ({title, imagen, price})
  // o hacerlo en una constante

  const {imagen, title, price, prof} = props

  // haciendo validadesciones de las props
  // podemos hacer dos tipos de validacion:
  // 1. Con un ternario: (Si existe el prop imagen renderiza la imagen si no manda el mensaje)
  //    {imagen ? <img src={imagen} alt={title} className="rounded-2xl" /> : <p>No hay imagen</p>}
  // 2. Validando directamente dentro de la etiqueta
  //    <img src={imagen ? imagen : "https://direccion-de-imagen-por-default.jpg"} alt={title ? title : "No hay descripcion"} className="rounded-2xl" />
  // Asi podemos validar todos y cada uno de las props

  // Otra forma es usando prop-types -> yarn add prop-types
  // Nos sirve para definir propiedades y su tipo por defecto para poder usar los componentes


  return (
    <article className="flex-1 bg-purple-400 rounded-2xl">
      <header>
        <img src={imagen} alt={title} className="rounded-2xl" />
      </header>
      <div className="text-center">
        <h4 className="text-sm" >{`Profesor: ${prof}`}</h4>
        <h4 className="text-sm" >{title}</h4>
      </div>
      <footer>
        <p className="flex justify-center">
          {`$ ${price}`}
        </p>
      </footer>
    </article>
  )
}

// Para ocupar PropTypes devemos declarar un objeto que contendra que tipo de
// dato esperamos que nos llegue en cada propiedad
// De esta forma evitamos esta validando una por una.
Curso4.propTypes = {
  title: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.string,
  prof: PropTypes.string
}

// definiendo las default props
Curso4.defaultProps = {
  title: "No se encontro el titulo",
  imagen: "https://direccion-de-imagen-por-default.jpg",
  price: "--",
  prof: 'Desconocido'
}