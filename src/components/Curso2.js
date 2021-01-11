const curso = {
  title: 'React desde cero',
  imagen: './assets/universe.jpg',
  price: '1000MNX'
}

export default function Curso2() {
  return (
    <article className="flex-1 bg-purple-400">
      <header>
        <img src={curso.imagen} alt={curso.title} />
      </header>
      <div className="text-center">
        <h4 className="text-sm" >{curso.title}</h4>
      </div>
      <footer>
        <p className="flex justify-center">
          {`$ ${curso.price}`}
        </p>
      </footer>
    </article>
  )
}
