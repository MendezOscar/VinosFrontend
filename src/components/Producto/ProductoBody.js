import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductos } from '../../actions/Producto';
import ProductoItem from '../Producto/ProductoItem'

function mapStateToPropos(state){
    return {
        productos: state.getProductos
    }
}

function mapDispatchToProps (dispatch){
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
        if(this.props.productos.data){
            productos = this.props.productos.data.map((currentValue, index, array) => {
                return (
                    <ProductoItem 
                    key={index}
                    idproducto = {currentValue.idproducto}
                    nombre = {currentValue.nombre}/>
                );
            })
        }
        return (
            <div>
                { productos }
            </div>
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(ProductoBody);