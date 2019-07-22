import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisitas } from '../actions';
import VisitaItem from '../components/Visita/VisitaItem';
import Navbar from '../components/NavBar/Navbar'
import './index.css'


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
                if(this.refs.transaccion.value === currentValue.estado){
                    return (
                        <VisitaItem
                            key={index}
                            titulo={currentValue.titulo}
                            descripcion={currentValue.descripcion}
                            fecha={currentValue.fecha}
                            numero={currentValue.numero}
                            id={currentValue.idvisita}
                            estado={currentValue.estado} />
                    );
                }
                return false;
            })
        }

        return (
            <div>
                <Navbar />
                <img src="https://guiadevinoslowcost.es/wp-content/uploads/2016/01/image-11.jpg" className="img-fluid" alt="/Home" />
                <br />
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
                <br />
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