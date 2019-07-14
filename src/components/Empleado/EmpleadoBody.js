import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmpleados } from '../../actions/Empleado';

function mapStateToPropos(state) {
    return {
        empleados: state.getEmpleados
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getEmpleados
    }, dispatch)
}

class EmpleadoBody extends Component {

    componentWillMount() {
        this.props.getEmpleados();
    }

    render() {
        let empleados = [];
        if (this.props.empleados.data) {
            empleados = this.props.empleados.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idempleado}</td>
                        <td className="text-left">{currentValue.nombre}</td>
                        <td className="text-left">{currentValue.apellido}</td>
                        <td className="text-center">{currentValue.edad}</td>
                        <td className="text-center">{currentValue.fechanacimiento}</td>
                        <td className="text-left">{currentValue.cargo}</td>
                        <td>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-info">
                                    <i class="fa fa-pencil"></i>
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
                            <th scope="col">Apellido</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Fecha De Nacimiento</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(EmpleadoBody);