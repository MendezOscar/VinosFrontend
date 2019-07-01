import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrdendeproduccion } from '../../actions/Odenproduccion';
import OrdendeproduccionItem from '../Ordendeproduccion/OdendeproduccionItem'

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
                    <OrdendeproduccionItem
                        key={index}
                        idorden ={currentValue.idorden}
                        descripcion={currentValue.descripcion}
                        fecha={currentValue.fecha}
                        cantidadobtenida={currentValue.cantidadobtenida}
                        item = {currentValue.item}
                        />
                );
            })
        }

        return (
            <div>
                {ordendeproduccion}
            </div>
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(OdendeproduccionBody);