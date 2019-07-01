import React, { Component } from 'react';

class InventarioTableHeader extends Component {
    render() {
        return (
            <div>
                 <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Fecha</th>
                            <th>Transaccion</th>
                            <th>Cantidad</th>
                            <th>Item</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default InventarioTableHeader;