import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import OrdendeproduccionCover from '../components/Ordendeproduccion/OdendeproduccionCover'
import OrdendeproduccionBody from '../components/Ordendeproduccion/OdendeproduccionBody'
import OrdendeproduccionTableHeader from '../components/Ordendeproduccion/OdendeproduccionTableHeader'

class Ordendeproduccion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <OrdendeproduccionCover />
                <div className="row">
                    <div className="col s12 m6">
                        <OrdendeproduccionTableHeader />
                        <OrdendeproduccionBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default Ordendeproduccion;