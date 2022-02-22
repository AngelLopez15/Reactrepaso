import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Banner from "./Banner";
import Course from "./Course";
import CursoGrid from "./CursoGrid";
import Formulario from "./Formulario";
import Navbar from "./Navbar";
import PersonGrid from "./PersonGrid";
import Users from "./Users";
import Usuarios from "../pages/Usuarios"

function AppRouter() {
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
    </BrowserRouter>
  );
}

export default AppRouter;

