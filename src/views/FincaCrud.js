import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import FincaCover from '../components/Finca/FincaCover'
import FincaBody from '../components/Finca/FincaBody'


class FincaCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FincaCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearfinca" role="button">Crear nueva finca</a>
                </div>
                <br />
                <div className="container">
                    <FincaBody />
                </div>
            </div>
        );
    }
}

export default FincaCrud;