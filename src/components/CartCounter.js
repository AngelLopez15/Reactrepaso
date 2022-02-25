import { connect } from 'react-redux'

const CartCounter = ({cartLenght}) => (
  <li className="text-green-500 px-5 flex items-center content-center">
    <p>Carrito: {cartLenght.length}</p>
  </li>
)

// Mapea el estado global de la aplicacion y se lo pasa al componente por props
const mapStateToProps = (state) => (
  {
    cartLenght: state.cart,
  }
)

// const mapDispatchToProps = () => (
  
// )
// nomenclatura de los HOC para pasar una funcion sobre otra funcion
export default connect(mapStateToProps)(CartCounter)