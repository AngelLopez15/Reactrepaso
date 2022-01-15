// Componentes tipo clase de react
import React, { Component } from 'react';

class Formulario extends Component {

  // Metodo constructor de las clases y recibe todos los atributos necesarios para que
  // una instancia de esta clase pueda ser creada. El contructor es obligatorio cuando
  // se reciben props
  constructor(props) {
    super(props)
    
    // El estado del componenete hace referencia a lo que nosotros necesitamos de información para nuestro
    // componente que vaya cambiando es informacion que se va a actualizar en nuestro componente a medida que 
    // algun evento sucesa en la interfaz y el estado hara que el componente cambie. Para hacer uso del estado hay que
    // declararlo como un objeto. 
    // El estado es unico y esclusiva para el componente al que s ele esta declarando
    this.state = {
      nombre: "",
      correo: "",
    }

    // Para poder usar los metodos debemos hacer un bind (pasarle la referencia del "this") que enlazar el metodo
    // con el "this" de esta clase
    this.cambiarNombre = this.cambiarNombre.bind(this)
    this.cambiarCorreo = this.cambiarCorreo.bind(this)

  }

  // para actualizar el estado usamos this.setState({})

  // Escribiendo metodos en este caso para cambiar el estado
  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }

  cambiarCorreo(e) {
    this.setState({
      correo: e.target.value
    })
  }

  // Ciclo de vida del componente
  
  // CILCO DE VIDA DEL MONTAJE
  // Antes se ocupaba el metodo "componentWillMount()" para poder hacer logica antes de que el componente
  // se renderizara pero en las nuevas versiones ya no existe este metodo (versiones 16)
  // Toda la logica que se necesite hacer antes de renderizar el componente se debe de hacer en el 
  // constructor (calculos matematicos, propiedades numericas etc.)
  // componentWillMount() {}

  // Despues de que se renderizo el componente se ejecuta el metodo "componentDidMount()" este hace referencia
  // a que puede pasar una vez el componente se haya montado. Como se ejecuta despues del render podemos estar 
  // seguros de que todos los elementos HTML del template ya existen en el DOM
  // componentDidMount() {}
  componentDidMount() {
    let elemento = document.getElementById("elemento")
    console.log(elemento)
  }

  // CICLO DE VIDA DE ACTUALIZACION
  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  // Metodo render es obligatorio.
  // El metod que corre por defecto es el render
  render() {
    
    return (
      <div>
        <p>Formulario</p>
        <form id="elemento">
          <div>
            <label>Nombre completo</label>
            <input 
              type="text" 
              onChange={ this.cambiarNombre } 
            />
          </div>
          <div>
            <label>Correo electrónico</label>
            <input 
              type="email" 
              onChange={ this.cambiarCorreo }
            />
          </div>
          {/* <div>
            <input type="submit" value="Enviar" />
          </div> */}
        </form>
        <div>
          <h2>Hola: {this.state.nombre}</h2>
          <p>Tu correo es: {this.state.correo}</p>
        </div>
      </div>
    );
  }
}

export default Formulario;