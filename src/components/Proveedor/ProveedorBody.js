import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProveedores } from '../../actions/Proveedor';

function mapStateToPropos(state) {
    return {
        proveedores: state.getProveedores
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProveedores
    }, dispatch)
}

class ProveedorBody extends Component {

    componentWillMount() {
        this.props.getProveedores();
    }

    render() {
        let proveedores = [];
        if (this.props.proveedores.data) {
            proveedores = this.props.proveedores.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idproveedor}</td>
                        <td className="">{currentValue.nombre}</td>
                        <td className="">{currentValue.contacto}</td>
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
                            <th scope="col">Nombre</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proveedores}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(ProveedorBody);