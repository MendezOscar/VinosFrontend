import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/Home">Vinos</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Actividades">Actividades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Empleado">Empleado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Finca">Finca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Inventario">Inventario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Materiaprima">Materia prima</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Ordendeproduccion">Orden de produccion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/producto">Producto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Proveedor">Proveedor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Reportes">Reportes</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
