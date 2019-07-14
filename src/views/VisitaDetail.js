import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisitaById } from '../actions'
import VisitaDetailCover from '../components/Visita/VisitaDetailCover'
import VisitaDetailBody from '../components/Visita/VisitaDetailBody'

function mapStateToPropos(state){
    return {
        visitaDetail: state.getVisitaById
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({
        getVisitaById
    }, dispatch)
} 


class VisitaDetail extends Component {
    componentWillMount() {
        this.props.getVisitaById(this.props.match.params.visitaId);
    }
    
    render() {
        if(this.props.visitaDetail.data){
            const { titulo, descripcion, fecha, numero, idfinca, idvisita } = this.props.visitaDetail.data;
            return(
                <div>
                    <Navbar/>
                    <VisitaDetailCover titulo = { titulo }/>
                    <VisitaDetailBody 
                     descripcion = { descripcion }
                     fecha = { fecha }
                     numero = { numero }
                     idfinca = { idfinca }
                     idvisita = { idvisita }
                    />
                </div>
            );
        }
        return(
        <div>
        </div>
        );  
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(VisitaDetail);
