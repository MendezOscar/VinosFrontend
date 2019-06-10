import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisitas } from '../actions';
import VisitaItem from '../components/VisitaItem';
import { DotLoader } from 'react-spinners';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from '../components/Navbar'


function mapStateToPropos(state){
    return {
        visitas: state.getVisitas
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({
        getVisitas
    }, dispatch)
}

class Home extends Component {

    componentWillMount(){
        this.props.getVisitas();
      }

    render() {
        let visitas = [];
        if(this.props.visitas.data){
            visitas = this.props.visitas.data.map((currentValue, index, array) => {
                return (
                    <VisitaItem 
                    key={index}
                    titulo = {currentValue.titulo}
                    descripcion = {currentValue.descripcion}
                    fecha = {currentValue.fecha}
                    numero = {currentValue.numero}
                    id = {currentValue.idvisita}/>
                );
            })
        }
        if(this.props.visitas.type === "START_GET_VISITAS"){
            return(
                <div className="Home-preLoader">
                    <DotLoader
                    color="#FFF"
                    loading= {true}/>
                </div>
            )
        }

        return (
            <div>
                <Navbar/>
                <div className="Home">
                    <div className="row">
                        <div className="col s12 m5 l9">
                            {visitas}
                        </div>
                    </div>
                   
                </div>
            </div>
            
        );
    }
}

export default connect (
    mapStateToPropos,
    mapDispatchToProps
)(Home);