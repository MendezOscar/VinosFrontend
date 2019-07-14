import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import OrdendeproduccionCover from '../components/Ordendeproduccion/OdendeproduccionCover'
import OrdendeproduccionBody from '../components/Ordendeproduccion/OdendeproduccionBody'

class Ordendeproduccion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <OrdendeproduccionCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearempleado" role="button">Crear nueva orden</a>
                </div>
                <br />
                <div className="container">
                    <OrdendeproduccionBody />
                </div>
            </div>
        );
    }
}

export default Ordendeproduccion;