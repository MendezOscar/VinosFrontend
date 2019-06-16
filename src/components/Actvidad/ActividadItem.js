import React, { Component } from 'react';

class ActividadItem extends Component {
    render() {
        const {id, descripcion, numerodevisita} = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        <td>{id}</td>
                        <td>{descripcion}</td>
                        <td>{numerodevisita}</td>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ActividadItem;