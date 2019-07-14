import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductos } from '../../actions/Producto';

function mapStateToPropos(state) {
    return {
        productos: state.getProductos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProductos
    }, dispatch)
}


class ProductoBody extends Component {

    componentWillMount() {
        this.props.getProductos();
    }

    render() {
        let productos = [];
        if (this.props.productos.data) {
            productos = this.props.productos.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                    <td>{currentValue.idproducto}</td>
                    <td className="">{currentValue.nombre}</td>
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
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(ProductoBody);