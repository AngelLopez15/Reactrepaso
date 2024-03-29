import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { addToCart, delateFromCart } from '../redux/actionCreators';
import { connect } from 'react-redux';
// Renderizando el componente con Props

const Curso4 = (props) => {
  // desestructurando las props
  // Se puede desestructurar directamente en los parentesis ({title, imagen, price})
  // o hacerlo en una constante

  const {id, imagen, title, price, prof, addCourseToCart, cart, deleteCourseFromCart} = props

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
        <Link to={`/cursos/${id}`}>
          <img src={imagen} alt={title} className="rounded-2xl" />
        </Link>
      </header>
      <div className="text-center">
        <h4 className="text-sm" >{`Profesor: ${prof}`}</h4>
        <h4 className="text-sm" >{title}</h4>
      </div>
      <footer>
        {
          cart.find(a => a === id)
          ?
            <p 
              className="flex justify-center text-white bg-red-400 py-2 cursor-pointer"
              onClick={() => deleteCourseFromCart(id)}
            >
              Remover del Carrito
            </p>
          :
            <p 
              className="flex justify-center text-white bg-red-400 py-2 cursor-pointer"
              onClick={() => addCourseToCart(id)}
            >
              { `$ ${price}` }
            </p>
        }
      </footer>
    </article>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

// Recibe un dispatch para generar otro objeto
// el primer elemento del objeto va a ser la funcion
const mapDispatchToProps = (dispatch) => ({
  addCourseToCart(id) {
    dispatch(addToCart(id))
  },
  deleteCourseFromCart(id) {
    dispatch(delateFromCart(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Curso4)

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