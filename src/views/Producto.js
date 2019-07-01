import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ProductoCover from '../components/Producto/ProductoCover'
import ProductoBody from '../components/Producto/ProductoBody'
import ProductoTableHeader from '../components/Producto/ProductoTableHeader'

class Producto extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductoCover />
                <div className="row">
                    <div className="col s12 m6">
                        <ProductoTableHeader />
                        <ProductoBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default Producto;