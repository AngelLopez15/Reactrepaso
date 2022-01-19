import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className='flex justify-center'>
        <li className='px-5'>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className='px-5'>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to="/cursos"
          >
            Cursos
          </NavLink>
        </li>
        <li className='px-5'>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to="/formulario"
          >
            Formulario
          </NavLink>
        </li>
        <li className='px-5'>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to="/usuarios"
          >
            Usuarios
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
