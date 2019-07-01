import React, { Component } from 'react';

class OdendeproduccionItem extends Component {
    render() {
        const { idorden, descripcion, fecha, cantidadobtenida, item } = this.props;
        return (
            <div>
                <div>
                    <table className="striped">
                        <tbody>
                            <tr>
                                <td className="center">{idorden}</td>
                                <td className="">{descripcion}</td>
                                <td className="left">{fecha.substring(0,10)}</td>
                                <td className="center">{cantidadobtenida}</td>
                                <td className="center">{item}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OdendeproduccionItem;