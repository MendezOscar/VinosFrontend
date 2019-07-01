import React, { Component } from 'react';

class ActividadItem extends Component {
    render() {
        const { id, descripcion, numerodevisita } = this.props;
        return (
            <div>
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="left">{id}</td>
                            <td className="left">{descripcion}</td>
                            <td className="right">{numerodevisita}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ActividadItem;