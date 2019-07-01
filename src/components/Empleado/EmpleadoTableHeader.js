import React, { Component } from 'react';

class EmpleadoTableHeader extends Component {
    render() {
        return (
            <div>
                 <table>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Fecha de nacimiento</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default EmpleadoTableHeader;