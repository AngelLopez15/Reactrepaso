// Debemos crear el estado global de la aplicacion
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { ADD_TO_CART, DELATE_FROM_CART } from "./actions"

// Declarando el estado inicial
const initialStore = {
  cart: [],
}

// Se debe crear el unico que puede modificar el estado (El reducer)
// Puede tener cualquier nombre
// Es una funcion que recibe el estado y la accion para modificar el estado
// y retorna un nuevo estado
// Para que el state no sea undefined cuando se inicia la app debemos ponerle un valor
// por default que sera el estado inicial
const rootReducer = (state = initialStore, action ) => {
  console.log(action)

  if (action.type === ADD_TO_CART) {

    if (state.cart.find(a => a === action.data)) {
      return state
    }

    return {
      ...state,
      cart: state.cart.concat(action.data)
    }
  }

  if (action.type === DELATE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter( c => c !== action.data ) // Hacemos un filter para dejar solo los elementos que sean diferentes del id que le enviamos
    }
  }

  return state
}

// A la funcion create store debemos de pasarle el reducer
export default createStore(rootReducer, composeWithDevTools())