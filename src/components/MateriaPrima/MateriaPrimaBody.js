import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMateriaprima } from '../../actions/Materiaprima';

function mapStateToPropos(state) {
    return {
        materiaprima: state.getMateriaprima
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMateriaprima
    }, dispatch)
}

class MateriaPrimaBody extends Component {

    componentWillMount() {
        this.props.getMateriaprima();
    }

    render() {
        let materiaprima = [];
        if (this.props.materiaprima.data) {
            materiaprima = this.props.materiaprima.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                    <td>{currentValue.idmateriaprima}</td>
                    <td className="">{currentValue.nombre}</td>
                    <td className="">{currentValue.descripcion}</td>
                    <td className="">{currentValue.idproveedor}</td>
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
                        <th scope="col">Descripcion</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {materiaprima}
                </tbody>
            </table>
        </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(MateriaPrimaBody);