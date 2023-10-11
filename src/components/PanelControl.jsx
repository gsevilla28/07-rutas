import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const PanelControl = () => {
  return (
    <div>
      <h1>Panel de control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/panel/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/panel/crear-articulos">Crear</NavLink>
          </li>
          <li>
            <NavLink to="/panel/gestion-usuarios">Gestion de usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/panel/acercade">Acerca de</NavLink>
          </li>
        </ul>
      </nav>
      {/* Cargar los componentes de las subrutas del panel, para cargar los subcomponentes se ocupa <Outlet/> */}
      <Outlet />
    </div>
  );
};
