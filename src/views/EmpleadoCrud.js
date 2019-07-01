import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import EmpleadoCover from '../components/Empleado/EmpleadoCover'
import EmpleadoBody from '../components/Empleado/EmpleadoBody'
import EmpleadoTableHeader from '../components/Empleado/EmpleadoTableHeader'

class EmpleadoCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <EmpleadoCover />
                <div className="row">
                    <div className="col s12 m6">
                        <EmpleadoTableHeader />
                        <EmpleadoBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmpleadoCrud;