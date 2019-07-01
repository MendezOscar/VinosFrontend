import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFincas } from '../../actions/Finca';
import FincaItem from '../Finca/FincaItem'

function mapStateToPropos(state) {
    return {
        fincas: state.getFincas
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFincas
    }, dispatch)
}


class FincaBody extends Component {

    componentWillMount() {
        this.props.getFincas();
    }

    render() {
        let fincas = [];
        if (this.props.fincas.data) {
            fincas = this.props.fincas.data.map((currentValue, index, array) => {
                return (
                    <FincaItem
                        key={index}
                        idfinca={currentValue.idfinca}
                        nombre={currentValue.nombre}
                        direccion={currentValue.direccion}
                        dueno={currentValue.dueno}
                        contacto={currentValue.contacto}
                        idproducto={currentValue.idproducto} />
                );
            })
        }
        return (
            <div>
                {fincas}
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(FincaBody);