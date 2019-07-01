import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventario } from '../../actions/Inventario';
import InventarioItem from '../Inventario/InventarioItem'

function mapStateToPropos(state) {
    return {
        inventario: state.getInventario
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInventario
    }, dispatch)
}

class InventarioBody extends Component {
    componentWillMount() {
        this.props.getInventario();
    }

    render() {
        let inventario = [];
        if (this.props.inventario.data) {
            inventario = this.props.inventario.data.map((currentValue, index, array) => {
                return (
                    <InventarioItem
                        key={index}
                        idkardex ={currentValue.idkardex}
                        fecha={currentValue.fecha}
                        transaccion={currentValue.transaccion}
                        cantidad={currentValue.cantidad}
                        item = {currentValue.item}
                        motivo = { currentValue.motivo }
                        />
                );
            })
        }

        return (
            <div>
                {inventario}
            </div>
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(InventarioBody);