import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrdenProduccionById } from '../actions/Odenproduccion'
import OrdenProduccionCover from '../components/Ordendeproduccion/OdendeproduccionCover'
import OrdenProduccionBody from '../components/Ordendeproduccion/OdendeproduccionBody'

function mapStateToPropos(state) {
    return {
        ordenDetail: state.getOrdenProduccionById
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getOrdenProduccionById
    }, dispatch)
}

class OrdenDetail extends Component {

    componentWillMount() {
        console.log(this.props.match.params.idorden);
        this.props.getOrdenProduccionById(this.props.match.params.ordenId);
    }

    render() {
        if (this.props.ordenDetail.data) {
            const { idorden, descripcion, fecha, cantidadobtenida, item, estado } = this.props.ordenDetail.data;
            return (
                <div>
                    <Navbar />
                    <OrdenProduccionCover/>
                    <OrdenProduccionBody
                        ordenId = {idorden}
                        descripcion={descripcion}
                        fecha={fecha}
                        cantidad={cantidadobtenida}
                        item={item}
                        estado={estado}
                    />
                </div>
            );
        }
        return (
            <div>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(OrdenDetail);