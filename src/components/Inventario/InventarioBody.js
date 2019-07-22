import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventario } from '../../actions/Inventario';

function mapStateToPropos(state) {
    return {
        inventario: state.getInventario
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInventario
    }, dispatch)
}

class InventarioBody extends Component {
    componentWillMount() {
        this.props.getInventario();
    }

    render() {
        let inventario = [];
        if (this.props.inventario.data) {
            inventario = this.props.inventario.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idkardex}</td>
                        <td className="text-center">{currentValue.fecha.substring(0,10)}</td>
                        <td className="text-center">{currentValue.transaccion}</td>
                        <td className="text-center">{currentValue.cantidad}</td>
                        <td className="text-center">{currentValue.item}</td>
                        <td className="text-center">{currentValue.motivo}</td>
                        <td>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-info">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button onClick={this.borrarActividad} type="button" className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                );
            })
        }

        return (
            <div>
                <table className="table table-hover">
                    <thead className="theadColor">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Transaccion</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Item</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventario}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(InventarioBody);