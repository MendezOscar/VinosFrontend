import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="nav-wrapper">
                    <a href="/Home" className="brand-logo right">Vinos</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Actividades">Actividades</a></li>
                        <li><a href="/Empleado">Empleado</a></li>
                        <li><a href="/Finca">Finca</a></li>
                        <li><a href="/Inventario">Inventario</a></li>
                        <li><a href="/Materia-prima">Materia prima</a></li>
                        <li><a href="/Orden-produccion">Orden de produccion</a></li>
                        <li><a href="/Producto">Producto</a></li>
                        <li><a href="/Proveedor">Proveedor</a></li>
                        <li><a href="/Reportes">Reportes</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;