import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMateriaprima } from '../../actions/Materiaprima';
import MateriaprimaItem from '../MateriaPrima/MateriaprimaItem'

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
                    <MateriaprimaItem
                        key={index}
                        idmateriaprima={currentValue.idmateriaprima}
                        nombre={currentValue.nombre}
                        descripcion={currentValue.descripcion}
                        idproveedor={currentValue.idproveedor}/>
                );
            })
        }
        return (
            <div>
                {materiaprima}
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(MateriaPrimaBody);