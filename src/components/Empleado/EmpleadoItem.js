import React, { Component } from 'react';

class EmpleadoItem extends Component {
    render() {
        const { idempleado, nombre, apellido, edad, fechanacimiento, cargo } = this.props;
        return (
            <div>
                <div>
                    <table className="striped">
                        <tbody>
                            <tr>
                                <td className="left">{idempleado}</td>
                                <td className="left">{nombre}</td>
                                <td className="left">{apellido}</td>
                                <td className="left">{edad}</td>
                                <td className="left">{fechanacimiento}</td>
                                <td className="left">{cargo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmpleadoItem;