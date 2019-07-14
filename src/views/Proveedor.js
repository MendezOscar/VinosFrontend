import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ProveedorCover from '../components/Proveedor/ProveedorCover'
import ProveddorBody from '../components/Proveedor/ProveedorBody'

class Proveedor extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProveedorCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearproveedor" role="button">Crear nuevo proveedor</a>
                </div>
                <br />
                <div className="container">
                    <ProveddorBody />
                </div>
            </div>
        );
    }
}

export default Proveedor;