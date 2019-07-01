import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ProveedorCover from '../components/Proveedor/ProveedorCover'
import ProveddorBody from '../components/Proveedor/ProveedorBody'
import ProveedorTableHeader from '../components/Proveedor/ProveedorTableHeader'

class Proveedor extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProveedorCover />
                <div className="row">
                    <div className="col s12 m6">
                        <ProveedorTableHeader />
                        <ProveddorBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default Proveedor;