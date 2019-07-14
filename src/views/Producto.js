import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ProductoCover from '../components/Producto/ProductoCover'
import ProductoBody from '../components/Producto/ProductoBody'

class Producto extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductoCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearproducto" role="button">Crear nuevo producto</a>
                </div>
                <br />
                <div className="container">
                    <ProductoBody />
                </div>
            </div>
        );
    }
}

export default Producto;