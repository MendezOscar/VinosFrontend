import React, { Component } from 'react';

class MateriaprimaTableHeader extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="center">Codigo</th>
                            <th className="center">nombre</th>
                            <th className="center">Descripcion</th>
                            <th className="center">Codigo proveedor</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default MateriaprimaTableHeader;