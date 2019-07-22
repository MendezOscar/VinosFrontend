import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrdendeproduccion } from '../actions/Odenproduccion'
import OrdendeproduccionCover from '../components/Ordendeproduccion/OdendeproduccionCover'
import OrdendeproduccionItem from '../components/Ordendeproduccion/OdendeproduccionItem'

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

class Ordendeproduccion extends Component {

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
                    idorden = {currentValue.idorden}
                    descripcion = {currentValue.descripcion}
                    fecha = {currentValue.fecha}
                    cantidadobtenida = {currentValue.cantidadobtenida}
                    item = {currentValue.item}
                    estado = {currentValue.estado}/>
                );
            })
        }
        return (
            <div>
                <Navbar />
                <OrdendeproduccionCover />
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <div className="form-group">
                            <label className="mr-sm-2">Estado  </label>
                            <select className="form-control mr-sm-2" ref="transaccion">
                                <option>Nueva</option>
                                <option>En proceso</option>
                                <option>Finalizada</option>
                            </select>
                        </div>

                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <br/>
                {ordendeproduccion}
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(Ordendeproduccion);