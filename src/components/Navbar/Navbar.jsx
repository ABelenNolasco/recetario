import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';



export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.myNavbar}`}>
      <Link className="navbar-brand" to="/">Recetario</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Inicio</Link>
          <Link className="nav-item nav-link" to="/agregar">Añadir Receta</Link>
          <Link className="nav-item nav-link" to="/listado">Listado de Recetas</Link>
        </div>
      </div>
    </nav>
  );
}



