import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMateriaPrimaOrden } from '../../actions/MateriaPrimaOrden';

function mapStateToPropos(state) {
    return {
        materiaPrimaOrden: state.getMateriaPrimaOrden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMateriaPrimaOrden
    }, dispatch)
}


class MateriaPrimaOrdenBody extends Component {

    componentWillMount() {
        this.props.getMateriaPrimaOrden();
    }

    render() {
        let materiaPrimaOrden = [];
        if (this.props.materiaPrimaOrden.data) {
            materiaPrimaOrden = this.props.materiaPrimaOrden.data.map((currentValue, index, array) => {
                if (currentValue.idorden === this.props.idorden) {
                    return (
                        <tr key={index} bgcolor="#ffffff">
                            <td className="">{currentValue.idmateriaprima}</td>
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
                }
                return false;
            })
        }
        return (
            <div>
                <table className="table table-hover">
                    <thead className="theadColor">
                        <tr>
                            <th scope="col">Materia Prima</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materiaPrimaOrden}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(MateriaPrimaOrdenBody);