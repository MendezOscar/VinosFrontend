import React, { Component } from 'react';

class InventarioItem extends Component {
    render() {
        const { idkardex, fecha, transaccion, cantidad, item, motivo } = this.props;
        return (
            <div>
                <div>
                    <table className="striped">
                        <tbody>
                            <tr>
                                <td className="">{idkardex}</td>
                                <td className="">{fecha.substring(0,10)}</td>
                                <td className="">{transaccion}</td>
                                <td className="">{cantidad}</td>
                                <td className="">{item}</td>
                                <td className="">{motivo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default InventarioItem;