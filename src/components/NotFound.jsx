import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Error 404 - Not Found</h1>
      <strong>Esta pagina no existe</strong> <br />
      <Link to="/inicio">Regresar al inicio</Link>
    </div>
  );
};
