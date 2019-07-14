import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import MateriaPrimaCover from '../components/MateriaPrima/MateriaPrimaCover'
import MateriaPrimaBody from '../components/MateriaPrima/MateriaPrimaBody'

class MateriaPrima extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MateriaPrimaCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearmateriaprima" role="button">Crear nuevo item</a>
                </div>
                <br />
                <div className="container">
                    <MateriaPrimaBody />
                </div>
            </div>
        );
    }
}

export default MateriaPrima;