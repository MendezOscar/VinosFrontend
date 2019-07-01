import React, { Component } from 'react';

class ProveedorTableHeader extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Contacto</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default ProveedorTableHeader;