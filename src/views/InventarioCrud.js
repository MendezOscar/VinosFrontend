import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import InventarioCover from '../components/Inventario/InventarioCover'
import InvenatrioBody from '../components/Inventario/InventarioBody'
import InventarioTableHeader from '../components/Inventario/InventarioTableHeader'

class InventarioCrud extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <InventarioCover />
                <div className="row">
                    <div className="col s12 m6">
                        <InventarioTableHeader />
                        <InvenatrioBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default InventarioCrud;