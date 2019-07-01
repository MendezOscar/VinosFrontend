import React, { Component } from 'react';

class ProveedorItem extends Component {
    render() {
        const { idproveedor, nombre, contacto } = this.props;
        return (
            <div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="">{idproveedor}</td>
                            <td className="">{nombre}</td>
                            <td className="">{contacto}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProveedorItem;