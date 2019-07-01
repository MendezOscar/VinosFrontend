import React, { Component } from 'react';

class FincaTableHeader extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>nombre</th>
                            <th>Direccion</th>
                            <th>dueno</th>
                            <th>contacto</th>
                            <th>Producto</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default FincaTableHeader;