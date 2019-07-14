import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrdendeproduccion } from '../../actions/Odenproduccion';

function mapStateToPropos(state) {
    return {
        ordendeproduccion: state.getOrdendeproduccion
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getOrdendeproduccion
    }, dispatch)
}

class OdendeproduccionBody extends Component {

    componentWillMount() {
        this.props.getOrdendeproduccion();
    }

    render() {
        let ordendeproduccion = [];
        if (this.props.ordendeproduccion.data) {
            ordendeproduccion = this.props.ordendeproduccion.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idorden}</td>
                        <td className="text-left">{currentValue.descripcion}</td>
                        <td className="text-center">{currentValue.fecha.substring(0,10)}</td>
                        <td className="text-center">{currentValue.cantidadobtenida}</td>
                        <td className="text-center">{currentValue.item}</td>
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
                            <th scope="col">Descripcion</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Cantidad Obtenida</th>
                            <th scope="col">Item</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordendeproduccion}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(OdendeproduccionBody);