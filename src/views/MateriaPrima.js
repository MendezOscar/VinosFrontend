import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import MateriaPrimaCover from '../components/MateriaPrima/MateriaPrimaCover'
import MateriaPrimaHeadertable from '../components/MateriaPrima/MateriaprimaTableHeader'
import MateriaPrimaBody from '../components/MateriaPrima/MateriaPrimaBody'

class MateriaPrima extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MateriaPrimaCover />
                <div className="row">
                    <div className="col s12 m6">
                        <MateriaPrimaHeadertable />
                        <MateriaPrimaBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default MateriaPrima;