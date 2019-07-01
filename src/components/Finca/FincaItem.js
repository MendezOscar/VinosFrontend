import React, { Component } from 'react';

class FincaItem extends Component {
    render() {
        const { idfinca, nombre, direccion, dueno, contacto, idproducto } = this.props;
        return (
            <div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="left">{idfinca}</td>
                            <td className="left">{nombre}</td>
                            <td className="left">{direccion}</td>
                            <td className="left">{dueno}</td>
                            <td className="left">{contacto}</td>
                            <td className="left">{idproducto}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FincaItem;