import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
    <div className="navbar">
      <div className="logo">Clients Management App</div>
        <ul className="nav-links">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link to="/create-client">Registro de Clientes</Link>
          <Link to="/client-list">Listado de Clientes</Link>
        </ul>
    </div>
  );
}
