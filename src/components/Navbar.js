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
                        <li><a href="/ordenes-de-produccion">Ordenes de produccion</a></li>
                        <li><a href="/ventas">Ventas</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;