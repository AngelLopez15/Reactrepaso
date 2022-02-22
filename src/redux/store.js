// Debemos crear el estado global de la aplicacion
import { createStore } from "redux"

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
  return state
}

// A la funcion create store debemos de pasarle el reducer
export default createStore(rootReducer)