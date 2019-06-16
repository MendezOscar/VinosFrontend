import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getActividades } from '../../actions/Actividad';
import ActividadItem from '../Actvidad/ActividadItem'

function mapStateToPropos(state){
    return {
        actividades: state.getActividades
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({
        getActividades
    }, dispatch)
}

class ActividadBody extends Component {
    
    componentWillMount() {
        this.props.getActividades();
    }
    
    render() {
        let actividades = [];
        if(this.props.actividades.data){
            actividades = this.props.actividades.data.map((currentValue, index, array) => {
                return (
                    <ActividadItem 
                    key={index}
                    id = {currentValue.idactividad}
                    descripcion = {currentValue.descripcion}
                    numerodevisita = {currentValue.numerodevisita}/>
                );
            })
        }

        return (
            <div>
                {actividades}
            </div>
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(ActividadBody);