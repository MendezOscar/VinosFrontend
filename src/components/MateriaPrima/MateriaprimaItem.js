import React, { Component } from 'react';

class MateriaprimaItem extends Component {
    render() {
        const { idmateriaprima, nombre, descripcion, idproveedor } = this.props;
        return (
            <div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="">{idmateriaprima}</td>
                            <td className="">{nombre}</td>
                            <td className="">{descripcion}</td>
                            <td className="">{idproveedor}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MateriaprimaItem;