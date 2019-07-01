import React, { Component } from 'react';
import './Index.css'

class ProveedorCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "http://g2consultores.com.mx/wp-content/uploads/2015/11/icon-desarrollo-proveedores.png"
        }
    }

    render() {
        return (
            <div className="ProveedorDetailCover">
                <img
                    src={this.state.cover}
                    className="ProveedorDetailCover-img"
                    alt="avatar" />
                <div>
                    <h5 className="ProveedorCover-name">Proveedores</h5>
                </div>
            </div>
        );
    }
}

export default ProveedorCover;