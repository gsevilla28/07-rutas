import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Persona = () => {
  const params = useParams();
  const navegar = useNavigate();

  //valores por defecto en parametros opcionales
  //let { nombre = "Gerardo", apellido = "HDZ" } = params;
  const { nombre, apellido } = params;

  const enviar = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.nombre.value;
    const lastname = target.apellido.value;
    const url = `/persona/${name}/${lastname}`;

    //redirigir
    navegar(url);
  };

  return (
    <div>
      {nombre ? (
        <h1>
          Esta es la pagina de {nombre} - {apellido}
        </h1>
      ) : (
        <h1>no hay personas para mostrar</h1>
      )}
      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <br />
        <input type="text" name="apellido" />
        <br />
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </div>
  );
};

export default Persona;
