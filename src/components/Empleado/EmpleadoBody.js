import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmpleados } from '../../actions/Empleado';
import EmpleadoItem from '../Empleado/EmpleadoItem'

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
                    <EmpleadoItem
                        key={index}
                        idempleado ={currentValue.idempleado}
                        nombre={currentValue.nombre}
                        apellido={currentValue.apellido}
                        edad={currentValue.edad}
                        fechanacimiento = {currentValue.fechanacimiento}
                        cargo = { currentValue.cargo }
                        />
                );
            })
        }

        return (
            <div>
                {empleados}
            </div>
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(EmpleadoBody);