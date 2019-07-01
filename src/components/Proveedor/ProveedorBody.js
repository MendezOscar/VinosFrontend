import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProveedores } from '../../actions/Proveedor';
import ProveedorItem from '../Proveedor/ProveedorItem'

function mapStateToPropos(state) {
    return {
        proveedores: state.getProveedores
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProveedores
    }, dispatch)
}

class ProveedorBody extends Component {

    componentWillMount() {
        this.props.getProveedores();
    }

    render() {
        let proveedores = [];
        if (this.props.proveedores.data) {
            proveedores = this.props.proveedores.data.map((currentValue, index, array) => {
                return (
                    <ProveedorItem
                        key={index}
                        idproveedor={currentValue.idproveedor}
                        nombre={currentValue.nombre}
                        contacto={currentValue.contacto} />
                );
            })
        }
        return (
            <div>
                {proveedores}
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(ProveedorBody);