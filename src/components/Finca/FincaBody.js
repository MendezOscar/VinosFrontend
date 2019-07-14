import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFincas } from '../../actions/Finca';
import { getProductoById } from '../../actions/Producto'

function mapStateToPropos(state) {
    return {
        fincas: state.getFincas,
        producto: state.getProductoById
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFincas,
        getProductoById
    }, dispatch)
}


class FincaBody extends Component {

    componentWillMount() {
        this.props.getFincas();
        this.setProducto(1010);
    }

    setProducto(idproducto) {
        let producto = this.props.getProductoById(idproducto);
        console.log(idproducto);
        console.log(producto);
    }

    render() {
        let fincas = [];
        if (this.props.fincas.data) {
            fincas = this.props.fincas.data.map((currentValue, index, array) => {
                return (
                    <tr key={index} bgcolor="#ffffff">
                        <td>{currentValue.idfinca}</td>
                        <td className="text-left">{currentValue.nombre}</td>
                        <td className="text-left">{currentValue.direccion}</td>
                        <td className="text-center">{currentValue.dueno}</td>
                        <td className="text-center">{currentValue.contacto}</td>
                        <td className="text-left">{currentValue.idproducto}</td>
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
                            <th scope="col">Direccion</th>
                            <th scope="col">Dueno</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fincas}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(FincaBody);