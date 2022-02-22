import React from 'react'
import { NavLink } from "react-router-dom";
import CartCounter from './CartCounter';

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
        <li className='px-5'>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to="/personas"
          >
            Personas
          </NavLink>
        </li>
        <CartCounter />
      </ul>
    </nav>
  )
}

export default Navbar
