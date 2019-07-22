import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getActividades, deleteActividad } from '../../actions/Actividad';

function mapStateToPropos(state) {
    return {
        actividades: state.getActividades
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getActividades,
        deleteActividad,
    }, dispatch)
}

class ActividadBody extends Component {

    componentWillMount() {
        this.props.getActividades();
    }

    borrarActividad(e) {
        this.props.deleteActividad(2016);
    }

    render() {
        let actividades = [];
        if (this.props.actividades.data) {
            actividades = this.props.actividades.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idactividad}</td>
                        <td className="text-left">{currentValue.descripcion}</td>
                        <td className="center">{currentValue.numerodevisita}</td>
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
                            <th scope="col">Descripcion</th>
                            <th scope="col"># de visita</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actividades}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(ActividadBody);