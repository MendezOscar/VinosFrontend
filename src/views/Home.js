import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisitas } from '../actions';
import VisitaItem from '../components/Visita/VisitaItem';
import Navbar from '../components/NavBar/Navbar'
//import ModalVisita from '../components/Visita/ModalVisita'


function mapStateToPropos(state) {
    return {
        visitas: state.getVisitas
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getVisitas
    }, dispatch)
}

class Home extends Component {

    componentWillMount() {
        this.props.getVisitas();
    }

    render() {
        let visitas = [];
        if (this.props.visitas.data) {
            visitas = this.props.visitas.data.map((currentValue, index, array) => {
                return (
                    <VisitaItem
                        key={index}
                        titulo={currentValue.titulo}
                        descripcion={currentValue.descripcion}
                        fecha={currentValue.fecha}
                        numero={currentValue.numero}
                        id={currentValue.idvisita} />
                );
            })
        }

        return (
            <div>
                <Navbar />
                <div className="Home">
                    {visitas}
                </div>
            </div>

        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(Home);