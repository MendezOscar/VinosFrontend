import React, { Component } from 'react';

class OdendeproduccionTableHeader extends Component {
    render() {
        return (
            <div>
                 <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>fecha</th>
                            <th>Cantidad Obtenida</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default OdendeproduccionTableHeader;