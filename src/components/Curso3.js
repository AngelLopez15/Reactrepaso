// Renderizando el componente con Props

export default function Curso3(props) {
  // desestructurando las props
  // Se puede desestructurar directamente en los parentesis ({title, imagen, price})
  // o hacerlo en una constante

  const {imagen, title, price, prof} = props

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
