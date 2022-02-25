// Las acciones tienen 2 atributos

import { ADD_TO_CART, DELATE_FROM_CART } from "./actions"

// El primero es el type y el segundo es la data que le queremos enviar
const addToCart = (id) => ({
  type: ADD_TO_CART,
  data: id // tambien podriamos pasar como id que seria lo mismo que id:id
})

const delateFromCart = (id) => ({
  type: DELATE_FROM_CART,
  data: id
})

export { addToCart, delateFromCart }