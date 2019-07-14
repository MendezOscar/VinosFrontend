import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postActividadVisita } from '../../actions/ActividadVisita'
import ActividadCover from '../Actvidad/ActividadCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postActividadVisita
    }, dispatch)
}

class ActividadVisitaPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirected: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({ isRedirected: true });
    }

    submitFormHandler = (e) => {
        e.preventDefault();
        const actividadvisita = this.refs.actividadvisita.value;
        const idactividad = this.refs.idactividad.value;
        const idvisita = this.refs.idvisita.value;
        const ActividadVisita = {
            actividadvisita,
            idactividad,
            idvisita,
        }
        this.props.postActividadVisita(ActividadVisita);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/detail/" + this.refs.idvisita.value} />
            );
        }
        return (
            <div>
                <NavBar />
                <ActividadCover />
                <br />
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col">
                                <label className="left">Codigo de actividad visita</label>
                                <input type="text" className="form-control" placeholder="Codigo de actividad visita" ref="actividadvisita" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la actividad</label>
                                <input type="text" className="form-control" placeholder="Codigo de la actividad" ref="idactividad" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la visita</label>
                                <input type="text" className="form-control" placeholder="Codigo de la visita" ref="idvisita" />
                            </div>
                        </div>

                        <br />

                        <div>
                            <button onClick={this.onClick} className="btn btn-secondary">Volver</button>
                            <button onClick={this.submitFormHandler} type="submit" className="btn btn-primary">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ActividadVisitaPost);