import React, { Component } from 'react';
import './Index.css'

class ProductoCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://pngimage.net/wp-content/uploads/2018/06/productos-icon-png.png"
        }
    }

    render() {
        return (
            <div className="ProductoDetailCover">
                <img
                    src={this.state.cover}
                    className="ProductoDetailCover-img"
                    alt="avatar" />
                <div>
                    <h5 className="ProductoCover-name">Productos</h5>
                </div>
            </div>
        );
    }
}

export default ProductoCover;