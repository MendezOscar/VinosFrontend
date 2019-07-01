import React, { Component } from 'react';
import './index.css'

class InventarioCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://image.flaticon.com/icons/png/512/1440/1440500.png"
        }
    }

    render() {
        return (
            <div className="InventarioDetailCover">
                <img
                    src={this.state.cover}
                    className="InventarioDetailCover-img"
                    alt="avatar" />
                <div>
                    <h5 className="InventarioCover-name">Inventario</h5>
                </div>
            </div>
        );
    }
}

export default InventarioCover;