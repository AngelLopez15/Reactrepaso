// import Curso4 from "./components/Curso4"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Banner from "./components/Banner";
import Course from "./components/Course";
import CursoGrid from "./components/CursoGrid";
import Formulario from "./components/Formulario";
import Navbar from "./components/Navbar";
import PersonGrid from "./components/PersonGrid";
import Users from "./components/Users";
import Usuarios from "./pages/Usuarios";

// Para renderizar varios componentes iguales lo mas optimo no es ponerlos uno por uno 
// si no renderizar varios componentes con un ciclo. Para eso vamos a necesitar hacer un 
// arreglo de objeto que contendra las propiedas que llevara cada componente

// const cursos = [
//   {
//     title: 'React desde cero',
//     imagen: './assets/universe.jpg',
//     price: '1000MNX',
//     prof: 'Angel'
//   },
//   {
//     title: 'React intermedio',
//     imagen: './assets/universe.jpg',
//     price: '1100MNX',
//     prof: 'Octavio'
//   },
//   {
//     title: 'React avanzado',
//     imagen: './assets/universe.jpg',
//     price: '1200MNX',
//     prof: 'López'
//   },
//   {
//     title: 'React Master',
//     imagen: './assets/universe.jpg',
//     price: '1300MNX',
//     prof: 'Cruz'
//   }
// ]


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Banner />} />
        <Route path="/cursos" element={<CursoGrid />} />
        <Route path="/cursos/:id" element={<Course />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuariosDos" element={<Usuarios />} />
        <Route path="/personas" element={<PersonGrid />} />
        <Route path="*" element={
          <div>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
          </div>
        } 
        />
      </Routes>
      {/* <div className="grid grid-cols-3 gap-4"> */}
        {/* <Curso3 
          title="React desde cero"
          imagen="./assets/universe.jpg"
          price="1000MNX"
          prof="Angel"
        />
        <Curso3 
          title="Vue desde cero"
          imagen="./assets/universe.jpg"
          price="500MNX"
          prof="Octavio"
        />
        <Curso4 
          title="Angular desde cero"
          imagen="./assets/universe.jpg"
          price="2000MNX"
          prof="López"
        /> */}
        {/* para hacer un ciclo y renderizar los componentes vamos a usar un ciclo "map" en lugar
        del tradicional forEach ya que map permite contruir un nuevo Array y eso es lo que necesitamos */}
        {/* {
          cursos.map( curso => <Curso4 title= {curso.title} imagen={curso.imagen} price={curso.price} prof={curso.prof} />)
        } */}
        {/* <Formulario /> */}
        {/* <CursoGrid /> */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
