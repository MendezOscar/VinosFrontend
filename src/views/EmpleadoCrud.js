import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import EmpleadoCover from '../components/Empleado/EmpleadoCover'
import EmpleadoBody from '../components/Empleado/EmpleadoBody'


class EmpleadoCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <EmpleadoCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearempleado" role="button">Crear nueva empleado</a>
                </div>
                <br />
                <div className="container">
                    <EmpleadoBody />
                </div>
            </div>
        );
    }
}

export default EmpleadoCrud;