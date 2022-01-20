import { Component } from 'react';

/*
Un componente de orden superior (HOC) permite reutilizar lógica a lo largo de una aplicación en diversos componentes.
Es una función que recibe un componente lo procesa y devuelve otro al ser procesado.
Para seguir el estándar:
    Se crea una carpeta HOC dentro de components.
    Se escribe la palabra with seguido de un name que nos ofrezca una pequeña descripción. 
withLoader.js 
Recibe un componente y retorna otro.
*/

// Al hacer que reciba dos parametros logramos que nuestro componenete sea dinamico y podemos 
// pasarle un string con el nombre de la propiedad del componente en este caso es la prop del arreglo
const withLoader = (namePropArray, WrappedComponent) => {
  return class WithLoader extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }

    render() {
      // console.log(this.props)
      return this.props[namePropArray].length === 0
      ? <h1>Cargando...</h1>
      : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoader