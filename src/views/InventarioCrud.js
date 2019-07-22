import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import InventarioCover from '../components/Inventario/InventarioCover'
import InvenatrioBody from '../components/Inventario/InventarioBody'

class InventarioCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <InventarioCover />
                <br/>
                <div className="left">
                    <a className="btnCreate" href="/crearinventario" role="button">Crear nueva transaccion para inventario</a>
                </div>
                <br />
                <div className="container">
                    <InvenatrioBody />
                </div>
            </div>
        );
    }
}

export default InventarioCrud;