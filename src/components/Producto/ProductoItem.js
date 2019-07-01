import React, { Component } from 'react';

class ProductoItem extends Component {
    render() {
        const { idproducto, nombre } = this.props;
        return (
            <div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="">{idproducto}</td>
                            <td className="right">{nombre}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductoItem;