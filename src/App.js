import Curso3 from "./components/Curso3";
import Curso4 from "./components/Curso4"

function App() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Curso3 
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
      />
    </div>
  );
}

export default App;
