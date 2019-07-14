import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getActividadVisita } from '../../actions/ActividadVisita';

function mapStateToPropos(state) {
    return {
        actividadvisita: state.getActividadVisita
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getActividadVisita
    }, dispatch)
}


class ActividadVisitaBody extends Component {

    componentWillMount() {
        this.props.getActividadVisita();
    }

    render() {
        let actividadVisita = [];
        if (this.props.actividadvisita.data) {
            actividadVisita = this.props.actividadvisita.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td className="">{currentValue.idactividad}</td>
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
                            <th scope="col">Actividades</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actividadVisita}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(ActividadVisitaBody);