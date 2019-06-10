import React, { Component } from 'react';
import Navbar from  '../components/Navbar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisitaById } from '../actions'
import VisitaDetailCover from '../components/VisitaDetailCover'
//import VisitaDetailBody from '../components/VisitaDetailBody'

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
            const { titulo } = this.props.visitaDetail.data;
            return(
                <div>
                    <Navbar/>
                    <VisitaDetailCover titulo = { titulo }/>
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
