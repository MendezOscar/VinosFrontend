import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import FincaCover from '../components/Finca/FincaCover'
import FincaBody from '../components/Finca/FincaBody'
import FincaHeaderTable from '../components/Finca/FincaTableHeader'

class FincaCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FincaCover />
                <div className="row">
                    <div className="col s12 m6">
                        <FincaHeaderTable />
                        <FincaBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default FincaCrud;